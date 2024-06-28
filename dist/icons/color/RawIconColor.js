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
function RawIconColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 200 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: "#FF3E4C", d: "M139.67 49.24C134.203 49.2347 128.961 47.0606 125.095 43.1947C121.229 39.3288 119.055 34.0871 119.05 28.62V0H26.91C19.7748 -4.92665e-07 12.9316 2.83379 7.88528 7.87823C2.83897 12.9227 0.00265152 19.7648 0 26.9V189.12C0.0079507 196.252 2.84661 203.089 7.89235 208.129C12.9381 213.169 19.7782 216 26.91 216H137.51C141.045 216.001 144.545 215.306 147.811 213.954C151.077 212.603 154.045 210.621 156.545 208.122C159.045 205.623 161.028 202.656 162.381 199.39C163.734 196.125 164.43 192.625 164.43 189.09V49.24H139.67Z", opacity: 0.3 }),
            React.createElement("path", { fill: "#FF3E4C", d: "M164.43 49.24H139.67C134.203 49.2347 128.961 47.0606 125.095 43.1947 121.229 39.3288 119.055 34.0871 119.05 28.62V0L164.43 49.24ZM183.94 170.6H58.9C50.0303 170.6 42.84 177.79 42.84 186.66V223.94C42.84 232.81 50.0303 240 58.9 240H183.94C192.81 240 200 232.81 200 223.94V186.66C200 177.79 192.81 170.6 183.94 170.6Z" }),
            React.createElement("path", { fill: "#fff", d: "M72.7 213.37V220.64H65.18V213.37H72.7ZM91.93 220.64 85.42 209.29H83.76V220.64H76.49V190.57H88.91C90.9792 190.512 93.0334 190.936 94.91 191.81 96.4543 192.54 97.7434 193.718 98.61 195.19 99.4473 196.689 99.8718 198.383 99.84 200.1 99.8964 202.108 99.2609 204.075 98.04 205.67 96.6937 207.285 94.8393 208.395 92.78 208.82L100 220.64H91.93ZM83.76 204.31H88.27C89.422 204.397 90.5635 204.039 91.46 203.31 91.8154 202.936 92.0881 202.492 92.2604 202.006 92.4327 201.521 92.5007 201.004 92.46 200.49 92.4938 199.978 92.4225 199.465 92.2505 198.982 92.0786 198.498 91.8095 198.055 91.46 197.68 90.5768 196.941 89.4373 196.582 88.29 196.68H83.78L83.76 204.31ZM122.17 215.16H110.9L109 220.64H101.34L112.34 190.79H120.72L131.72 220.64H124L122.17 215.16ZM120.3 209.63 116.56 198.57 112.77 209.63H120.3ZM175.46 190.57 168.28 220.64H159.28L154.47 200.53 149.62 220.64H140.62L133.43 190.57H141.34L145.21 212.35 150.48 190.57H158.48L163.75 212.35 167.66 190.57H175.46Z" }),
            React.createElement("path", { fill: "#FF3E4C", d: "M65.34 123.66H41.06C39.1607 118.658 38.1915 113.351 38.2 108 38.1927 102.653 39.1619 97.349 41.06 92.35 41.8159 90.3706 42.715 88.4488 43.75 86.6L47.1 92.35 56.29 108.12 60.29 115.06 65.34 123.66ZM116.32 135.84C109.577 144.108 100.06 149.645 89.54 151.42 87.3216 151.788 85.0786 151.989 82.83 152.02L86.37 146.02 95.37 130.66 99.45 123.66 104.45 115.1 109.35 123.66 113.35 130.66 116.32 135.84ZM126.23 108C126.239 113.348 125.266 118.653 123.36 123.65 122.604 125.639 121.705 127.571 120.67 129.43L117.37 123.65 108.51 108.18 104.51 101.18 99.43 92.3101H123.33C125.251 97.3178 126.234 102.636 126.23 108ZM120 85.41H77.32L82.41 76.53 86.41 69.53 89.26 64.53C100.057 66.2715 109.816 71.9765 116.63 80.53 117.862 82.0787 118.988 83.709 120 85.41ZM81.57 64 78.4 69.53 69.31 85.41 65.31 92.41 60.31 101.22 55.17 92.41 51.17 85.41 48.17 80.23C55.0495 71.7602 64.8343 66.1531 75.62 64.5 77.5899 64.2002 79.5777 64.0331 81.57 64ZM87.32 130.62 82.32 139.08 78.32 145.96 75.11 151.46C64.6061 149.742 55.0811 144.274 48.3 136.07 46.8804 134.351 45.5902 132.53 44.44 130.62H87.32Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240H0z" }))));
}
exports.default = RawIconColor;
