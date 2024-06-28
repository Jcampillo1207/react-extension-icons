declare module "@svgr/core" {
  const transform: (
    svgCode: string,
    config?: any,
    state?: { componentName: string }
  ) => Promise<string>;
  export default transform;
}
