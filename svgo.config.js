/**
 * SVGO config factory.
 *
 * `prefix` must be unique per generated component. Every icon in this library
 * ships inline <defs> (clipPaths, gradients) referenced via url(#id). Without a
 * per-component prefix SVGO's cleanupIds collapses every id to "a", so any page
 * rendering two icons emits duplicate DOM ids and the second icon resolves
 * url(#a) against the first one's clipPath.
 */
const createSvgoConfig = (prefix) => ({
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          convertShapeToPath: {
            convertArcs: true,
          },
          convertPathData: false,
          // Keep ids readable; prefixIds below makes them unique.
          cleanupIds: {
            minify: false,
          },
        },
      },
    },
    {
      name: "prefixIds",
      params: {
        prefix,
        delim: "_",
      },
    },
    "removeDimensions",
  ],
});

module.exports = createSvgoConfig;
module.exports.createSvgoConfig = createSvgoConfig;
