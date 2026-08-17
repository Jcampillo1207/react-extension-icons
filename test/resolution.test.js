const test = require("node:test");
const assert = require("node:assert/strict");

const fs = require("node:fs");
const path = require("node:path");

const { getIconComponent, extensionMapping } = require("react-extension-icons");

const VARIANTS = ["color", "single_color", "grayscale"];
const readme = fs.readFileSync(path.join(__dirname, "../README.md"), "utf-8");

/**
 * The README is the documented contract, so the tests read it instead of keeping
 * a second copy of the list. A hardcoded copy would agree with any drift instead
 * of catching it.
 */
const parseExtensionReference = () => {
  const [, section] = readme.split("<!-- extension-reference:start -->");
  assert.ok(section, "README is missing the extension-reference markers");

  const rows = section
    .split("<!-- extension-reference:end -->")[0]
    .split("\n")
    .map((line) => line.match(/^\|\s*`([^`]+)`\s*\|(.+)\|\s*$/))
    .filter(Boolean);

  assert.ok(rows.length > 0, "no rows parsed out of the extension reference");

  return rows.map(([, icon, cell]) => ({
    icon,
    extensions: [...cell.matchAll(/`([^`]+)`/g)].map(([, ext]) => ext),
  }));
};

const REFERENCE = parseExtensionReference();
const DOCUMENTED_EXTENSIONS = REFERENCE.flatMap((row) => row.extensions);
const GALLERY_ICONS = [...readme.matchAll(/<img[^>]*\salt="([^"]+)"/g)].map(([, alt]) => alt);
const GALLERY_SOURCES = [...readme.matchAll(/<img\s+src="([^"]+)"/g)].map(([, src]) => src);

test("every documented extension resolves in every variant", () => {
  const missing = [];

  for (const extension of DOCUMENTED_EXTENSIONS) {
    for (const variant of VARIANTS) {
      if (!getIconComponent(extension, variant)) {
        missing.push(`${extension}/${variant}`);
      }
    }
  }

  assert.deepEqual(missing, [], `unresolved: ${missing.join(", ")}`);
});

test("the extension reference matches extensionMapping exactly", () => {
  const documented = new Set(DOCUMENTED_EXTENSIONS);
  const implemented = new Set(Object.keys(extensionMapping));

  const undocumented = [...implemented].filter((e) => !documented.has(e));
  const unimplemented = [...documented].filter((e) => !implemented.has(e));

  assert.deepEqual(unimplemented, [], `documented but not implemented: ${unimplemented}`);
  assert.deepEqual(undocumented, [], `implemented but not documented: ${undocumented}`);
});

test("each reference row lists its extensions under the right icon", () => {
  for (const { icon, extensions } of REFERENCE) {
    assert.equal(extensions[0], icon, `${icon} row should lead with its canonical name`);

    for (const extension of extensions) {
      assert.equal(
        extensionMapping[extension],
        icon,
        `${extension} is documented under ${icon} but maps to ${extensionMapping[extension]}`
      );
    }
  }
});

test("the gallery shows every icon exactly once", () => {
  const icons = [...new Set(Object.values(extensionMapping))].sort();

  assert.deepEqual([...GALLERY_ICONS].sort(), icons);
  assert.equal(GALLERY_ICONS.length, 40);
});

test("every gallery image points at an SVG that exists in this repo", () => {
  // Pinning the images to a commit is how the XLS artwork ended up as a 404
  // after it was renamed. Resolve each URL against svg/color/ instead.
  assert.equal(GALLERY_SOURCES.length, GALLERY_ICONS.length);

  for (const src of GALLERY_SOURCES) {
    const file = src.split("/svg/color/")[1];
    assert.ok(file, `gallery image is not served from svg/color/: ${src}`);
    assert.ok(
      fs.existsSync(path.join(__dirname, "../svg/color", file)),
      `gallery references a missing file: svg/color/${file}`
    );
  }
});

test("ps resolves to the PS icon, not EPS", () => {
  // Regression: substring matching in the generator aliased 'ps' onto EpsIcon*.
  assert.match(getIconComponent("ps").render.name, /^PsIcon/);
  assert.match(getIconComponent("eps").render.name, /^EpsIcon/);
});

test("docx resolves to the DOCX icon, not DOC", () => {
  assert.match(getIconComponent("docx").render.name, /^DocxIcon/);
  assert.match(getIconComponent("doc").render.name, /^DocIcon/);
});

test("xls resolves to the spreadsheet icon", () => {
  // The artwork shipped under the wrong filename (XSL.svg) until 1.2.0, so
  // xls/xlsx resolved to nothing while xsl rendered a spreadsheet.
  assert.match(getIconComponent("xls").render.name, /^XlsIcon/);
  assert.match(getIconComponent("xlsx").render.name, /^XlsIcon/);
});

test("aliases resolve to their canonical icon", () => {
  const pairs = [
    ["htm", "html"], ["jar", "java"], ["tif", "tiff"], ["midi", "mid"],
    ["qt", "mov"], ["m4a", "mp4"], ["mpg", "mpeg"], ["wmv", "wma"],
    ["dxf", "dwg"], ["jpeg", "jpg"], ["pptx", "ppt"], ["xlsx", "xls"],
  ];

  for (const [alias, canonical] of pairs) {
    assert.equal(
      getIconComponent(alias),
      getIconComponent(canonical),
      `${alias} should resolve to the ${canonical} icon`
    );
  }
});

test("extensions are normalized", () => {
  const pdf = getIconComponent("pdf");

  assert.equal(getIconComponent("PDF"), pdf);
  assert.equal(getIconComponent(".pdf"), pdf);
  assert.equal(getIconComponent("  .PDF  "), pdf);
});

test("unknown extensions return null instead of throwing", () => {
  assert.equal(getIconComponent("nope"), null);
  assert.equal(getIconComponent(""), null);
});

test("variant defaults to color", () => {
  assert.equal(getIconComponent("pdf"), getIconComponent("pdf", "color"));
  assert.notEqual(getIconComponent("pdf", "grayscale"), getIconComponent("pdf", "color"));
});
