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
function Mp4IconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 200 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2712)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M139.67 49.24C134.203 49.2347 128.961 47.0606 125.095 43.1947C121.229 39.3288 119.055 34.0871 119.05 28.62V0H26.9099C19.7747 -4.92665e-07 12.9316 2.83379 7.88525 7.87823C2.83894 12.9227 0.00265152 19.7648 0 26.9V189.12C0.0079507 196.252 2.84659 203.089 7.89233 208.129C12.9381 213.169 19.7781 216 26.9099 216H137.51C141.045 216.001 144.545 215.306 147.811 213.954C151.077 212.603 154.045 210.621 156.545 208.122C159.045 205.623 161.028 202.656 162.381 199.39C163.734 196.125 164.43 192.625 164.43 189.09V49.24H139.67Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M164.43 49.24H139.67C134.203 49.2347 128.961 47.0606 125.095 43.1947C121.229 39.3288 119.055 34.0871 119.05 28.62V0L164.43 49.24Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M183.94 170.6H58.8999C50.0302 170.6 42.8401 177.79 42.8401 186.66V223.94C42.8401 232.81 50.0302 240 58.8999 240H183.94C192.81 240 200 232.81 200 223.94V186.66C200 177.79 192.81 170.6 183.94 170.6Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M78.5901 213.37V220.64H71.0601V213.37H78.5901Z", fill: "white" }),
            React.createElement("path", { d: "M116.19 190.79V220.64H108.92V202L102.45 220.67H96.1599L89.6499 201.96V220.67H82.3799V190.82H91.27L99.3899 211.61L107.39 190.82L116.19 190.79Z", fill: "white" }),
            React.createElement("path", { d: "M128.48 210.1V220.64H121.21V190.57H133C136.57 190.57 139.3 191.46 141.17 193.23C142.116 194.16 142.855 195.28 143.338 196.516C143.82 197.751 144.036 199.075 143.97 200.4C144.004 202.148 143.573 203.874 142.72 205.4C141.846 206.889 140.552 208.086 139 208.84C137.128 209.729 135.072 210.161 133 210.1H128.48ZM136.56 200.4C136.56 197.734 135.1 196.4 132.18 196.4H128.48V204.23H132.18C135.1 204.257 136.56 202.98 136.56 200.4Z", fill: "white" }),
            React.createElement("path", { d: "M146.9 215.11V209L160.64 190.16H168.46V208.75H172.08V215.08H168.46V220.61H161.1V215.08L146.9 215.11ZM161.7 198.61L154.3 208.78H161.7V198.61Z", fill: "white" }),
            React.createElement("path", { d: "M119.44 131.91V84.2001C119.438 83.9684 119.414 83.7375 119.37 83.5101C119.359 83.4421 119.343 83.3751 119.32 83.3101C119.284 83.1537 119.237 83 119.18 82.85C119.154 82.7816 119.124 82.7148 119.09 82.6501C119.029 82.5041 118.955 82.3635 118.87 82.23L118.77 82.0701C118.644 81.8889 118.504 81.7184 118.35 81.5601L118.28 81.5001C118.144 81.3718 118 81.2516 117.85 81.1401L117.67 81.0301L117.27 80.8101L117.06 80.72C116.904 80.6595 116.743 80.6095 116.58 80.5701H116.42C116.193 80.522 115.962 80.4986 115.73 80.5001H48.3702C47.4444 80.5848 46.5834 81.0122 45.9563 81.6984C45.3293 82.3847 44.9811 83.2805 44.98 84.2101C44.98 84.2701 44.98 84.3201 44.98 84.3801V132.08C44.9559 132.694 45.1509 133.297 45.5301 133.78C45.8581 134.334 46.3248 134.793 46.8841 135.112C47.4434 135.432 48.0761 135.6 48.72 135.6H115.72C116.7 135.595 117.639 135.205 118.334 134.515C119.03 133.825 119.427 132.89 119.44 131.91ZM49 89.48V82.2401H54.8899V89.48H49ZM58.94 89.48V82.2401H64.8301V89.48H58.94ZM68.8799 89.48V82.2401H74.7701V89.48H68.8799ZM78.8201 89.48V82.2401H84.71V89.48H78.8201ZM88.7601 89.48V82.2401H94.6499V89.48H88.7601ZM98.7 89.48V82.2401H104.59V89.48H98.7ZM108.64 89.48V82.2401H114.53V89.48H108.64ZM47.6399 124.59V91.4401H116.87V124.59H47.6399ZM48.99 133.78V126.54H54.8799V133.78H48.99ZM58.93 133.78V126.54H64.8201V133.78H58.93ZM68.8702 133.78V126.54H74.7601V133.78H68.8702ZM78.8101 133.78V126.54H84.7V133.78H78.8101ZM88.75 133.78V126.54H94.6399V133.78H88.75ZM98.69 133.78V126.54H104.58V133.78H98.69ZM108.63 133.78V126.54H114.52V133.78H108.63Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M90.22 105.56L80.6499 100.03C80.1548 99.7466 79.5942 99.598 79.0237 99.5991C78.4532 99.6002 77.8929 99.7511 77.3989 100.037C76.905 100.322 76.4946 100.732 76.2087 101.226C75.9229 101.72 75.7716 102.28 75.77 102.85V113.91C75.7716 114.481 75.9229 115.041 76.2087 115.534C76.4946 116.028 76.905 116.438 77.3989 116.724C77.8929 117.009 78.4532 117.16 79.0237 117.161C79.5942 117.162 80.1548 117.014 80.6499 116.73L90.22 111.2C90.714 110.914 91.1241 110.502 91.4092 110.007C91.6943 109.512 91.8445 108.951 91.8445 108.38C91.8445 107.809 91.6943 107.248 91.4092 106.753C91.1241 106.258 90.714 105.847 90.22 105.56Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2712" },
                React.createElement("rect", { width: "1em", height: "1em", fill: "white" }))));
}
exports.default = Mp4IconSingleColor;
