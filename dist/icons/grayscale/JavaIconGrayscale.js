"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function JavaIconGrayscale(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2208)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140 49.24C134.532 49.2347 129.289 47.0609 125.422 43.1953C121.554 39.3297 119.378 34.0881 119.37 28.62V0H27.2C20.063 0 13.2184 2.83514 8.17175 7.88174C3.12515 12.9283 0.290039 19.773 0.290039 26.91V189.13C0.300637 196.26 3.14046 203.094 8.18591 208.132C13.2314 213.17 20.0699 216 27.2 216H137.8C144.937 216 151.782 213.165 156.828 208.118C161.875 203.072 164.71 196.227 164.71 189.09V49.24H140Z", fill: "#5B5B5B" })),
            React.createElement("path", { d: "M164.71 49.24H140C134.532 49.2347 129.289 47.0609 125.422 43.1953C121.554 39.3297 119.378 34.0881 119.37 28.62V0L164.71 49.24Z", fill: "#5B5B5B" }),
            React.createElement("path", { d: "M184.23 170.6H59.1899C50.3202 170.6 43.13 177.79 43.13 186.659V223.939C43.13 232.809 50.3202 240 59.1899 240H184.23C193.1 240 200.29 232.809 200.29 223.939V186.659C200.29 177.79 193.1 170.6 184.23 170.6Z", fill: "#5B5B5B" }),
            React.createElement("path", { d: "M67 213.37V220.64H59.47V213.37H67Z", fill: "white" }),
            React.createElement("path", { d: "M89.3101 190.57V211.11C89.3101 214.26 88.45 216.68 86.73 218.39C85.7754 219.272 84.653 219.952 83.4297 220.39C82.2064 220.828 80.9072 221.015 79.61 220.94C78.1853 221.015 76.76 220.807 75.4161 220.328C74.0723 219.849 72.8365 219.109 71.78 218.15C69.85 216.3 68.89 213.62 68.89 210.15H76.08C76.08 212.964 77.1434 214.37 79.27 214.37C81.11 214.37 82.03 213.29 82.03 211.13V190.59L89.3101 190.57Z", fill: "white" }),
            React.createElement("path", { d: "M112.74 215.15H101.47L99.6 220.64H91.9399L102.94 190.78H111.32L122.32 220.64H114.58L112.74 215.15ZM110.87 209.62L107.13 198.57L103.34 209.62H110.87Z", fill: "white" }),
            React.createElement("path", { d: "M130.78 190.57L138.13 213.2L145.49 190.57H153.28L142.81 220.64H133.41L123 190.57H130.78Z", fill: "white" }),
            React.createElement("path", { d: "M174.71 215.15H163.44L161.57 220.64H153.91L164.91 190.78H173.29L184.29 220.64H176.55L174.71 215.15ZM172.84 209.62L169.1 198.57L165.31 209.62H172.84Z", fill: "white" }),
            React.createElement("path", { d: "M67.4 154.14H65.1899C60.0899 154.14 56.0267 152.643 53 149.65C49.9733 146.657 48.4633 142.613 48.47 137.52V121.2C48.47 114.96 45.9867 111.84 41.02 111.84V104.18C45.9867 104.18 48.47 101.06 48.47 94.8199V78.4999C48.47 73.3999 49.98 69.3532 53 66.3599C56.02 63.3666 60.0833 61.8732 65.1899 61.8799H67.4V69.5399H65.89C59.89 69.5399 56.89 72.9299 56.89 79.7099V96.4299C56.8167 102.43 54.4833 106.223 49.89 107.81V108.21C54.39 109.69 56.7233 113.383 56.89 119.29V136.29C56.89 143.07 59.89 146.46 65.89 146.46H67.4V154.14Z", fill: "#5B5B5B" }),
            React.createElement("path", { d: "M97.59 154.14V146.48H99.1C105.1 146.48 108.1 143.09 108.1 136.31V119.31C108.233 113.397 110.567 109.704 115.1 108.23V107.83C110.527 106.217 108.193 102.424 108.1 96.4504V79.7304C108.1 72.9504 105.1 69.5604 99.1 69.5604H97.59V61.9004H99.8101C104.91 61.9004 108.97 63.3937 111.99 66.3804C115.01 69.3671 116.523 73.4137 116.53 78.5204V94.8404C116.53 101.08 119.013 104.2 123.98 104.2V111.86C119.013 111.86 116.53 114.98 116.53 121.22V137.54C116.53 142.64 115.017 146.684 111.99 149.67C108.963 152.657 104.903 154.154 99.8101 154.16L97.59 154.14Z", fill: "#5B5B5B" }),
            React.createElement("path", { d: "M81.67 86.1702C85.3317 86.1702 88.3 83.2019 88.3 79.5403C88.3 75.8786 85.3317 72.9102 81.67 72.9102C78.0084 72.9102 75.04 75.8786 75.04 79.5403C75.04 83.2019 78.0084 86.1702 81.67 86.1702Z", fill: "#5B5B5B" }),
            React.createElement("path", { d: "M81.67 114.64C85.3317 114.64 88.3 111.672 88.3 108.01C88.3 104.348 85.3317 101.38 81.67 101.38C78.0084 101.38 75.04 104.348 75.04 108.01C75.04 111.672 78.0084 114.64 81.67 114.64Z", fill: "#5B5B5B" }),
            React.createElement("path", { d: "M81.67 143.11C85.3317 143.11 88.3 140.141 88.3 136.479C88.3 132.818 85.3317 129.85 81.67 129.85C78.0084 129.85 75.04 132.818 75.04 136.479C75.04 140.141 78.0084 143.11 81.67 143.11Z", fill: "#5B5B5B" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2208" },
                React.createElement("rect", { width: 20, height: 24, fill: "white", transform: "translate(0.290039)" }))));
}
exports.default = JavaIconGrayscale;
