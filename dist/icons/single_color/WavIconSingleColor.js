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
function WavIconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2759)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140.38 49.24C134.913 49.2347 129.671 47.0606 125.805 43.1947C121.939 39.3288 119.765 34.0871 119.76 28.62V1.85821e-06H27.63C24.0953 -0.00131167 20.5949 0.693768 17.3289 2.04553C14.0628 3.3973 11.0952 5.37928 8.59534 7.87824C6.09545 10.3772 4.11238 13.3442 2.7594 16.6097C1.40642 19.8752 0.709961 23.3753 0.709961 26.91V189.13C0.720561 196.262 3.56176 203.098 8.60938 208.136C13.657 213.174 20.4982 216.003 27.63 216H138.23C141.764 216 145.263 215.304 148.528 213.952C151.793 212.599 154.759 210.617 157.258 208.118C159.757 205.619 161.739 202.653 163.092 199.388C164.444 196.123 165.14 192.624 165.14 189.09V49.24H140.38Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M165.14 49.24H140.38C134.913 49.2347 129.671 47.0606 125.805 43.1947C121.939 39.3288 119.765 34.0871 119.76 28.62V0L165.14 49.24Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M184.66 170.6H59.62C50.7503 170.6 43.5601 177.79 43.5601 186.66V223.94C43.5601 232.81 50.7503 240 59.62 240H184.66C193.53 240 200.72 232.81 200.72 223.94V186.66C200.72 177.79 193.53 170.6 184.66 170.6Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M72.0601 213.37V220.64H64.53V213.37H72.0601Z", fill: "white" }),
            React.createElement("path", { d: "M116.72 190.57L109.53 220.64H100.53L95.73 200.52L90.88 220.64H81.88L74.6899 190.57H82.6L86.47 212.35L91.75 190.57H99.75L105.03 212.35L108.94 190.57H116.72Z", fill: "white" }),
            React.createElement("path", { d: "M139.18 215.15H127.9L126.03 220.64H118.38L129.38 190.78H137.76L148.76 220.64H141.02L139.18 215.15ZM137.3 209.62L133.56 198.57L129.78 209.62H137.3Z", fill: "white" }),
            React.createElement("path", { d: "M157.21 190.57L164.57 213.2L171.93 190.57H179.71L169.25 220.64H159.85L149.43 190.57H157.21Z", fill: "white" }),
            React.createElement("path", { d: "M120.94 131.92H109.94V87.6601C109.94 86.1775 109.351 84.7557 108.303 83.7074C107.254 82.659 105.833 82.0701 104.35 82.0701H76.35C74.8674 82.0701 73.4455 82.659 72.3972 83.7074C71.3489 84.7557 70.76 86.1775 70.76 87.6601V131.92H59.8101V83.9201C59.8101 80.52 61.1607 77.2592 63.5649 74.855C65.9692 72.4508 69.2299 71.1001 72.63 71.1001H108.04C111.44 71.1001 114.701 72.4508 117.105 74.855C119.509 77.2592 120.86 80.52 120.86 83.9201L120.94 131.92Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M107.96 144.9C115.129 144.9 120.94 139.089 120.94 131.92C120.94 124.751 115.129 118.94 107.96 118.94C100.791 118.94 94.98 124.751 94.98 131.92C94.98 139.089 100.791 144.9 107.96 144.9Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M57.9 144.9C65.0687 144.9 70.88 139.089 70.88 131.92C70.88 124.751 65.0687 118.94 57.9 118.94C50.7314 118.94 44.92 124.751 44.92 131.92C44.92 139.089 50.7314 144.9 57.9 144.9Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2759" },
                React.createElement("rect", { width: 200.01, height: 240, fill: "white", transform: "translate(0.709961)" }))));
}
exports.default = WavIconSingleColor;
