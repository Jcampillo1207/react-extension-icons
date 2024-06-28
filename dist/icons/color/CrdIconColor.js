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
function CrdIconColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_546)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140.24 49.24C134.773 49.2347 129.531 47.0606 125.665 43.1947C121.799 39.3288 119.625 34.0871 119.62 28.62V0H27.48C23.9453 -2.4406e-07 20.4452 0.696337 17.1797 2.04932C13.9142 3.4023 10.9472 5.38537 8.44824 7.88525C5.94929 10.3851 3.96731 13.3529 2.61554 16.6189C1.26378 19.8849 0.568696 23.3853 0.570009 26.92V189.13C0.580608 196.26 3.42043 203.094 8.46588 208.132C13.5113 213.17 20.3499 216 27.48 216H138.09C145.222 216 152.062 213.169 157.108 208.129C162.153 203.089 164.992 196.252 165 189.12V49.24H140.24Z", fill: "#3CBA32" })),
            React.createElement("path", { d: "M165 49.24H140.24C134.773 49.2347 129.531 47.0606 125.665 43.1947C121.799 39.3288 119.625 34.0871 119.62 28.62V0L165 49.24Z", fill: "#3CBA32" }),
            React.createElement("path", { d: "M184.51 170.6H59.47C50.6003 170.6 43.41 177.79 43.41 186.66V223.94C43.41 232.81 50.6003 240 59.47 240H184.51C193.38 240 200.57 232.81 200.57 223.94V186.66C200.57 177.79 193.38 170.6 184.51 170.6Z", fill: "#3CBA32" }),
            React.createElement("path", { d: "M79.65 213.37V220.65H72.12V213.37H79.65Z", fill: "white" }),
            React.createElement("path", { d: "M106.68 193.3C109.218 195.358 110.943 198.249 111.55 201.46H103.85C103.331 200.128 102.417 198.987 101.23 198.19C99.9751 197.369 98.4986 196.954 97 197C96.021 196.969 95.048 197.163 94.1565 197.569C93.2651 197.975 92.4792 198.581 91.86 199.34C90.4634 201.115 89.7533 203.334 89.86 205.59C89.75 207.84 90.4607 210.054 91.86 211.82C92.4817 212.575 93.2685 213.176 94.1597 213.579C95.051 213.981 96.0228 214.173 97 214.14C98.4851 214.178 99.9465 213.763 101.19 212.95C102.365 212.158 103.277 211.033 103.81 209.72H111.51C110.891 212.92 109.167 215.801 106.64 217.86C103.919 219.943 100.554 221.005 97.13 220.86C94.4366 220.92 91.7768 220.253 89.43 218.93C87.2326 217.655 85.4536 215.768 84.31 213.5C83.0605 211.022 82.4389 208.275 82.5 205.5C82.4471 202.742 83.0684 200.013 84.31 197.55C85.4536 195.282 87.2326 193.395 89.43 192.12C91.7768 190.797 94.4366 190.13 97.13 190.19C100.58 190.071 103.961 191.173 106.68 193.3Z", fill: "white" }),
            React.createElement("path", { d: "M131.07 220.65L124.56 209.29H122.9V220.65H115.63V190.58H128.05C130.118 190.522 132.171 190.943 134.05 191.81C135.594 192.54 136.883 193.718 137.75 195.19C138.587 196.689 139.012 198.383 138.98 200.1C139.037 202.111 138.402 204.081 137.18 205.68C135.835 207.295 133.98 208.403 131.92 208.82L139.07 220.65H131.07ZM122.9 204.31H127.41C128.561 204.392 129.701 204.034 130.6 203.31C130.955 202.934 131.228 202.488 131.4 202.001C131.572 201.514 131.64 200.995 131.6 200.48C131.635 199.968 131.564 199.454 131.392 198.971C131.22 198.487 130.951 198.045 130.6 197.67C129.717 196.931 128.577 196.572 127.43 196.67H122.9V204.31Z", fill: "white" }),
            React.createElement("path", { d: "M167.84 213.39C166.591 215.666 164.699 217.523 162.4 218.73C159.818 220.06 156.943 220.72 154.04 220.65H142.68V190.58H154C156.905 190.504 159.783 191.147 162.38 192.45C164.667 193.633 166.553 195.467 167.8 197.72C169.093 200.124 169.744 202.821 169.69 205.55C169.755 208.279 169.118 210.978 167.84 213.39ZM160.01 211.88C160.825 211.049 161.457 210.056 161.863 208.966C162.27 207.875 162.442 206.712 162.37 205.55C162.442 204.387 162.269 203.222 161.863 202.13C161.456 201.038 160.825 200.043 160.01 199.21C158.189 197.62 155.814 196.811 153.4 196.96H150V214.14H153.45C155.845 214.273 158.197 213.462 160 211.88H160.01Z", fill: "white" }),
            React.createElement("path", { d: "M82.52 62C82.52 62 106 67 84.25 140.49H81.25C81.25 140.49 60.35 72.8 82.52 62Z", fill: "#3CBA32" }),
            React.createElement("path", { d: "M87.71 62.72C87.71 62.72 120.55 75.1101 86.13 140.06C86.13 140.06 138.12 76.69 87.71 62.72Z", fill: "#3CBA32" }),
            React.createElement("path", { d: "M101.39 67.1899C101.39 67.1899 132.93 82.88 90.16 137.61C90.16 137.61 139.27 84.7599 101.39 67.1899Z", fill: "#3CBA32" }),
            React.createElement("path", { d: "M77.86 62.72C77.86 62.72 45.02 75.1101 79.44 140.06C79.44 140.06 27.45 76.69 77.86 62.72Z", fill: "#3CBA32" }),
            React.createElement("path", { d: "M64.18 67.1899C64.18 67.1899 32.64 82.88 75.41 137.61C75.41 137.61 26.3 84.7599 64.18 67.1899Z", fill: "#3CBA32" }),
            React.createElement("path", { d: "M87.19 154.03H78.73L76.19 145.96H89.73L87.19 154.03Z", fill: "#3CBA32" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_546" },
                React.createElement("rect", { width: 20, height: 24, fill: "white", transform: "translate(0.570007)" }))));
}
exports.default = CrdIconColor;
