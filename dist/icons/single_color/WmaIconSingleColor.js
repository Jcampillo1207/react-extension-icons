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
function WmaIconSingleColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 200 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: props.color || "#4690FF", d: "M139.67 49.24C134.203 49.2347 128.961 47.0606 125.095 43.1947C121.229 39.3288 119.055 34.0871 119.05 28.62V0H26.91C19.7748 -4.92664e-07 12.9316 2.83379 7.88528 7.87823C2.83897 12.9227 0.00265152 19.7648 0 26.9V189.12C0.0079507 196.252 2.84661 203.089 7.89235 208.129C12.9381 213.169 19.7782 216 26.91 216H137.51C141.045 216.001 144.545 215.306 147.811 213.954C151.077 212.603 154.045 210.621 156.545 208.122C159.045 205.623 161.028 202.656 162.381 199.39C163.734 196.125 164.43 192.625 164.43 189.09V49.24H139.67Z", opacity: 0.3 }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M164.43 49.24H139.67C134.203 49.2347 128.961 47.0606 125.095 43.1947 121.229 39.3288 119.055 34.0871 119.05 28.62V0L164.43 49.24ZM183.94 170.6H58.9C50.0303 170.6 42.84 177.79 42.84 186.66V223.94C42.84 232.81 50.0303 240 58.9 240H183.94C192.81 240 200 232.81 200 223.94V186.66C200 177.79 192.81 170.6 183.94 170.6Z" }),
            React.createElement("path", { fill: "#fff", d: "M67 213.37V220.64H59.47V213.37H67ZM111.66 190.57 104.47 220.64H95.47L90.67 200.52 85.82 220.64H76.82L69.63 190.57H77.54L81.41 212.35 86.69 190.57H94.69L99.97 212.35 103.88 190.57H111.66ZM149.3 190.78V220.64H142V202L135.53 220.67H129.24L122.73 201.96V220.67H115.45V190.81H124.34L132.47 211.61 140.42 190.81 149.3 190.78ZM173 215.15H161.68L159.8 220.64H152.15L163.15 190.78H171.53L182.53 220.64H174.79L173 215.15ZM171.13 209.62 167.38 198.57 163.6 209.62H171.13Z" }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M117.65 131.92H106.7V87.6601C106.7 86.1775 106.111 84.7557 105.063 83.7074C104.014 82.659 102.593 82.0701 101.11 82.0701H73.11C71.6274 82.0701 70.2056 82.659 69.1573 83.7074C68.109 84.7557 67.52 86.1775 67.52 87.6601V131.92H56.52V83.9201C56.5226 80.5191 57.8755 77.2583 60.2813 74.8544C62.6871 72.4504 65.949 71.1001 69.35 71.1001H104.76C108.16 71.1001 111.421 72.4508 113.825 74.855C116.229 77.2592 117.58 80.52 117.58 83.9201L117.65 131.92Z" }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M104.67 144.9C111.839 144.9 117.65 139.089 117.65 131.92 117.65 124.751 111.839 118.94 104.67 118.94 97.5013 118.94 91.69 124.751 91.69 131.92 91.69 139.089 97.5013 144.9 104.67 144.9ZM54.6 144.9C61.7687 144.9 67.58 139.089 67.58 131.92 67.58 124.751 61.7687 118.94 54.6 118.94 47.4313 118.94 41.62 124.751 41.62 131.92 41.62 139.089 47.4313 144.9 54.6 144.9Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240H0z" }))));
}
exports.default = WmaIconSingleColor;
