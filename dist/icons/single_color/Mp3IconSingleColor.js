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
function Mp3IconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2735)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140.24 49.24C134.773 49.2347 129.531 47.0606 125.665 43.1947C121.799 39.3288 119.625 34.0871 119.62 28.62V0H27.4798C20.3428 0 13.4982 2.83514 8.4516 7.88174C3.40499 12.9283 0.569824 19.773 0.569824 26.91V189.13C0.580423 196.26 3.42024 203.094 8.4657 208.132C13.5112 213.17 20.3497 216 27.4798 216H138.09C145.222 216 152.062 213.169 157.107 208.129C162.153 203.089 164.992 196.252 165 189.12V49.24H140.24Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M165 49.24H140.24C134.773 49.2347 129.531 47.0606 125.665 43.1947C121.799 39.3288 119.625 34.0871 119.62 28.62V0L165 49.24Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M184.51 170.6H59.4698C50.6002 170.6 43.4099 177.79 43.4099 186.66V223.94C43.4099 232.81 50.6002 240 59.4698 240H184.51C193.38 240 200.57 232.81 200.57 223.94V186.66C200.57 177.79 193.38 170.6 184.51 170.6Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M79.2298 213.37V220.64H71.6998V213.37H79.2298Z", fill: "white" }),
            React.createElement("path", { d: "M116.83 190.78V220.64H109.56V202L103.09 220.67H96.7998L90.2898 201.96V220.67H82.9998V190.81H91.8898L100.01 211.61L108.01 190.81L116.83 190.78Z", fill: "white" }),
            React.createElement("path", { d: "M129.12 210.09V220.64H121.85V190.57H133.63C137.2 190.57 139.93 191.46 141.8 193.23C142.745 194.159 143.484 195.277 143.966 196.511C144.449 197.745 144.665 199.067 144.6 200.39C144.636 202.139 144.204 203.865 143.35 205.39C142.477 206.882 141.183 208.082 139.63 208.84C137.755 209.721 135.7 210.149 133.63 210.09H129.12ZM137.2 200.39C137.2 197.764 135.74 196.447 132.82 196.44H129.12V204.27H132.82C135.74 204.27 137.2 202.977 137.2 200.39Z", fill: "white" }),
            React.createElement("path", { d: "M163.91 190.34C165.323 190.982 166.516 192.025 167.34 193.34C168.126 194.628 168.531 196.112 168.51 197.62C168.589 199.324 168.053 200.999 167 202.34C166.04 203.502 164.708 204.297 163.23 204.59V204.81C167.123 206.05 169.066 208.473 169.06 212.08C169.088 213.696 168.677 215.29 167.87 216.69C167.051 218.061 165.843 219.157 164.4 219.84C162.691 220.632 160.823 221.019 158.94 220.97C155.48 220.97 152.73 220.12 150.71 218.42C148.69 216.72 147.58 214.12 147.41 210.63H154.51C154.501 211.777 154.894 212.892 155.62 213.78C156.004 214.182 156.472 214.493 156.991 214.692C157.51 214.891 158.066 214.972 158.62 214.93C159.076 214.955 159.532 214.884 159.959 214.722C160.386 214.56 160.775 214.311 161.1 213.99C161.408 213.669 161.648 213.29 161.806 212.874C161.964 212.458 162.037 212.015 162.02 211.57C162.02 209.097 160.233 207.863 156.66 207.87H155.3V201.96H156.62C159.82 202.007 161.42 200.857 161.42 198.51C161.449 198.081 161.391 197.65 161.248 197.244C161.106 196.839 160.882 196.466 160.59 196.15C160.294 195.867 159.944 195.647 159.561 195.505C159.177 195.362 158.768 195.299 158.36 195.32C157.907 195.293 157.454 195.369 157.035 195.542C156.616 195.715 156.241 195.981 155.94 196.32C155.311 197.116 154.96 198.096 154.94 199.11H147.83C147.813 197.751 148.069 196.402 148.585 195.145C149.1 193.887 149.864 192.746 150.83 191.79C152.67 190.09 155.25 189.24 158.57 189.24C160.41 189.201 162.235 189.577 163.91 190.34Z", fill: "white" }),
            React.createElement("path", { d: "M120.8 131.92H109.85V87.6601C109.85 86.1775 109.261 84.7557 108.213 83.7074C107.164 82.659 105.742 82.0701 104.26 82.0701H76.2598C75.5257 82.0701 74.7988 82.2147 74.1206 82.4956C73.4424 82.7765 72.8261 83.1883 72.3071 83.7074C71.788 84.2264 71.3763 84.8427 71.0953 85.5209C70.8144 86.1991 70.6698 86.926 70.6698 87.6601V131.92H59.6698V83.9201C59.6698 82.2357 60.0018 80.5678 60.6467 79.0118C61.2916 77.4557 62.2367 76.042 63.4282 74.8514C64.6197 73.6609 66.0342 72.7168 67.5908 72.0731C69.1473 71.4294 70.8154 71.0988 72.4998 71.1001H108C111.4 71.1001 114.661 72.4508 117.065 74.855C119.469 77.2592 120.82 80.52 120.82 83.9201L120.8 131.92Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M107.82 144.9C114.988 144.9 120.8 139.089 120.8 131.92C120.8 124.751 114.988 118.94 107.82 118.94C100.651 118.94 94.8398 124.751 94.8398 131.92C94.8398 139.089 100.651 144.9 107.82 144.9Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M57.7498 144.9C64.9185 144.9 70.7299 139.089 70.7299 131.92C70.7299 124.751 64.9185 118.94 57.7498 118.94C50.5812 118.94 44.7698 124.751 44.7698 131.92C44.7698 139.089 50.5812 144.9 57.7498 144.9Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2735" },
                React.createElement("rect", { width: 20, height: 24, fill: "white", transform: "translate(0.569824)" }))));
}
exports.default = Mp3IconSingleColor;
