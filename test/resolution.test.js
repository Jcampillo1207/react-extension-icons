const test = require("node:test");
const assert = require("node:assert/strict");

const { getIconComponent, extensionMapping } = require("react-extension-icons");

const VARIANTS = ["color", "single_color", "grayscale"];

/**
 * Every extension the README advertises. Hardcoded on purpose: deriving it from
 * extensionMapping would make the test agree with any drift instead of catching it.
 */
const DOCUMENTED_EXTENSIONS = [
  "ai", "avi", "bmp", "crd", "csv", "dll", "doc", "docx", "dwg", "dxf",
  "eps", "exe", "flv", "gif", "htm", "html", "iso", "jar", "java", "jfi",
  "jfif", "jif", "jpe", "jpeg", "jpg", "m4a", "m4p", "mdb", "mid", "midi",
  "mov", "mp2", "mp3", "mp4", "mpe", "mpeg", "mpg", "mpv", "pdf", "png",
  "ppam", "pps", "ppsm", "ppsx", "ppt", "pptx", "potm", "potx", "ps", "psd",
  "pub", "qt", "rar", "raw", "rss", "sldm", "sldx", "svg", "tif", "tiff",
  "txt", "wav", "wma", "wmv", "xml", "xsl", "zip",
];

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

test("every extensionMapping target resolves", () => {
  const missing = Object.keys(extensionMapping).filter((ext) => !getIconComponent(ext));
  assert.deepEqual(missing, [], `extensionMapping has dead targets: ${missing.join(", ")}`);
});

test("the README extension table matches extensionMapping", () => {
  const documented = new Set(DOCUMENTED_EXTENSIONS);
  const implemented = new Set(Object.keys(extensionMapping));

  const undocumented = [...implemented].filter((e) => !documented.has(e));
  const unimplemented = [...documented].filter((e) => !implemented.has(e));

  assert.deepEqual(unimplemented, [], `documented but not implemented: ${unimplemented}`);
  assert.deepEqual(undocumented, [], `implemented but not documented: ${undocumented}`);
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

test("aliases resolve to their canonical icon", () => {
  const pairs = [
    ["htm", "html"], ["jar", "java"], ["tif", "tiff"], ["midi", "mid"],
    ["qt", "mov"], ["m4a", "mp4"], ["mpg", "mpeg"], ["wmv", "wma"],
    ["dxf", "dwg"], ["jpeg", "jpg"], ["pptx", "ppt"],
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
  assert.equal(getIconComponent("xls"), null);
});

test("variant defaults to color", () => {
  assert.equal(getIconComponent("pdf"), getIconComponent("pdf", "color"));
  assert.notEqual(getIconComponent("pdf", "grayscale"), getIconComponent("pdf", "color"));
});
