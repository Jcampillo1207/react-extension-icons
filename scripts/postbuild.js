const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "../dist");

/**
 * Node resolves the module format of a .js file from the nearest package.json.
 * The root manifest has no "type", so everything defaults to CommonJS — these
 * stubs are what make dist/esm actually load as ESM.
 */
const stubs = {
  cjs: { type: "commonjs" },
  esm: { type: "module" },
};

for (const [dir, manifest] of Object.entries(stubs)) {
  const target = path.join(dist, dir);

  if (!fs.existsSync(target)) {
    throw new Error(`Missing build output: dist/${dir}. Did tsc fail?`);
  }

  fs.writeFileSync(
    path.join(target, "package.json"),
    `${JSON.stringify(manifest, null, 2)}\n`
  );
}

console.log("Wrote dist/cjs/package.json and dist/esm/package.json.");
