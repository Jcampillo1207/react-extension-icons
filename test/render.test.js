const test = require("node:test");
const assert = require("node:assert/strict");

const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const lib = require("react-extension-icons");
const { Icon } = lib;

const iconComponents = Object.entries(lib)
  .filter(([name]) => /Icon(Color|SingleColor|Grayscale)$/.test(name))
  .map(([, component]) => component);

const collectIds = (html) => (html.match(/\sid="([^"]*)"/g) || []).map((m) => m.trim());

test("all 120 icon components are exported", () => {
  assert.equal(iconComponents.length, 120);
});

test("rendering every icon at once produces no duplicate DOM ids", () => {
  // Regression: SVGO collapsed every clipPath id to "a", so the second icon on a
  // page resolved url(#a) against the first icon's clipPath.
  const html = renderToStaticMarkup(
    React.createElement(
      "div",
      null,
      iconComponents.map((C, i) => React.createElement(C, { key: i }))
    )
  );

  const ids = collectIds(html);
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);

  assert.ok(ids.length > 0, "expected the icons to emit ids");
  assert.deepEqual([...new Set(duplicates)], [], "duplicate ids rendered");
});

test("every url(#id) reference points at an id defined in the same icon", () => {
  for (const Component of iconComponents) {
    const html = renderToStaticMarkup(React.createElement(Component));
    const defined = new Set(collectIds(html).map((m) => m.slice(4, -1)));
    const referenced = (html.match(/url\(#([^)]+)\)/g) || []).map((m) => m.slice(5, -1));

    for (const ref of referenced) {
      assert.ok(defined.has(ref), `dangling reference url(#${ref})`);
    }
  }
});

test("Icon applies size to width and height", () => {
  const html = renderToStaticMarkup(React.createElement(Icon, { extension: "pdf", size: 48 }));

  assert.match(html, /width="48"/);
  assert.match(html, /height="48"/);
});

test("Icon defaults to size 24", () => {
  const html = renderToStaticMarkup(React.createElement(Icon, { extension: "pdf" }));

  assert.match(html, /width="24"/);
  assert.match(html, /height="24"/);
});

test("size accepts CSS lengths", () => {
  const html = renderToStaticMarkup(
    React.createElement(Icon, { extension: "pdf", size: "2rem" })
  );

  assert.match(html, /width="2rem"/);
});

test("color is applied on single_color and withheld elsewhere", () => {
  const single = renderToStaticMarkup(
    React.createElement(Icon, { extension: "pdf", variant: "single_color", color: "#ff0000" })
  );
  assert.match(single, /fill="#ff0000"/);

  // Regression: color was forwarded on every variant, emitting a dead
  // color attribute on the <svg>.
  for (const variant of ["color", "grayscale"]) {
    const html = renderToStaticMarkup(
      React.createElement(Icon, { extension: "pdf", variant, color: "#ff0000" })
    );
    assert.doesNotMatch(html, /<svg[^>]*\scolor="/, `color leaked on ${variant}`);
  }
});

test("Icon forwards arbitrary svg props", () => {
  const html = renderToStaticMarkup(
    React.createElement(Icon, {
      extension: "pdf",
      className: "custom",
      style: { opacity: 0.5 },
      "data-testid": "pdf-icon",
      role: "img",
    })
  );

  assert.match(html, /class="custom"/);
  assert.match(html, /opacity:0\.5/);
  assert.match(html, /data-testid="pdf-icon"/);
  assert.match(html, /role="img"/);
});

test("explicit width and height override size", () => {
  const html = renderToStaticMarkup(
    React.createElement(Icon, { extension: "pdf", size: 48, width: 10, height: 12 })
  );

  assert.match(html, /width="10"/);
  assert.match(html, /height="12"/);
});

test("icons are decorative by default and labelled when named", () => {
  const bare = renderToStaticMarkup(React.createElement(Icon, { extension: "pdf" }));
  assert.match(bare, /aria-hidden="true"/);

  const titled = renderToStaticMarkup(
    React.createElement(Icon, { extension: "pdf", title: "PDF file", titleId: "t1" })
  );
  assert.doesNotMatch(titled, /aria-hidden/);
  assert.match(titled, /<title id="t1">PDF file<\/title>/);
  assert.match(titled, /aria-labelledby="t1"/);

  const labelled = renderToStaticMarkup(
    React.createElement(Icon, { extension: "pdf", "aria-label": "PDF file" })
  );
  assert.doesNotMatch(labelled, /aria-hidden/);
});

test("Icon renders null for unknown extensions", () => {
  assert.equal(renderToStaticMarkup(React.createElement(Icon, { extension: "nope" })), "");
});

test("Icon and individual icons forward refs", () => {
  assert.equal(Icon.$$typeof, Symbol.for("react.forward_ref"));

  for (const Component of iconComponents) {
    assert.equal(Component.$$typeof, Symbol.for("react.forward_ref"));
  }
});
