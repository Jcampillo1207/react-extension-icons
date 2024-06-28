module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // customize the plugin options
          convertShapeToPath: {
            convertArcs: true,
          },
          // disable plugins
          convertPathData: false,
        },
      },
    },
    {
      name: "removeDimensions",
      active: true,
    },
  ],
};
