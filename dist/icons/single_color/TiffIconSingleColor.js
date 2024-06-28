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
function TiffIconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 200 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2598)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M139.67 49.24C134.203 49.2347 128.961 47.0606 125.095 43.1947C121.229 39.3288 119.055 34.0871 119.05 28.62V0H26.9099C23.3752 -2.4406e-07 19.8751 0.696337 16.6096 2.04932C13.3441 3.4023 10.3771 5.38537 7.87818 7.88525C5.37922 10.3851 3.39718 13.3529 2.04541 16.6189C0.693646 19.8849 -0.00131167 23.3853 1.85854e-06 26.92V189.13C-0.00131167 192.665 0.693646 196.165 2.04541 199.431C3.39718 202.697 5.37922 205.665 7.87818 208.165C10.3771 210.665 13.3441 212.648 16.6096 214.001C19.8751 215.354 23.3752 216.05 26.9099 216.05H137.51C144.65 216.05 151.497 213.214 156.545 208.165C161.594 203.117 164.43 196.27 164.43 189.13V49.25L139.67 49.24Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M164.43 49.24H139.67C134.203 49.2347 128.961 47.0606 125.095 43.1947C121.229 39.3288 119.055 34.0871 119.05 28.62V0L164.43 49.24Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M183.94 170.6H58.8999C50.0302 170.6 42.8401 177.79 42.8401 186.66V223.94C42.8401 232.81 50.0302 240 58.8999 240H183.94C192.81 240 200 232.81 200 223.94V186.66C200 177.79 192.81 170.6 183.94 170.6Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M83.6299 213.37V220.65H76.1001V213.37H83.6299Z", fill: "white" }),
            React.createElement("path", { d: "M109 190.58V196.36H100.84V220.65H93.52V196.36H85.4399V190.58H109Z", fill: "white" }),
            React.createElement("path", { d: "M119.36 190.58V220.65H112.08V190.58H119.36Z", fill: "white" }),
            React.createElement("path", { d: "M144 190.58V196.36H131.67V202.95H141.2V208.48H131.67V220.65H124.4V190.58H144Z", fill: "white" }),
            React.createElement("path", { d: "M167.33 190.58V196.36H155V202.95H164.53V208.48H155V220.65H147.73V190.58H167.33Z", fill: "white" }),
            React.createElement("path", { d: "M104.31 146.41H60.1299C55.8058 146.405 51.6606 144.685 48.603 141.627C45.5455 138.57 43.8254 134.424 43.8201 130.1V85.9302C43.8254 81.6061 45.5455 77.4606 48.603 74.4031C51.6606 71.3455 55.8058 69.6254 60.1299 69.6201H104.31C108.631 69.6281 112.773 71.3497 115.827 74.4072C118.881 77.4648 120.597 81.6088 120.6 85.9302V130.1C120.597 134.422 118.881 138.565 115.827 141.623C112.773 144.681 108.631 146.402 104.31 146.41ZM60.1299 76.8301C57.7172 76.8327 55.4043 77.7924 53.6982 79.4984C51.9922 81.2044 51.0327 83.5175 51.03 85.9302V130.1C51.0327 132.513 51.9922 134.826 53.6982 136.532C55.4043 138.238 57.7172 139.197 60.1299 139.2H104.31C106.721 139.195 109.032 138.234 110.735 136.528C112.439 134.823 113.397 132.511 113.4 130.1V85.9302C113.397 83.5192 112.439 81.2077 110.735 79.502C109.032 77.7962 106.721 76.8354 104.31 76.8301H60.1299Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M117 121.7V130.1C117 133.466 115.663 136.695 113.284 139.077C110.904 141.458 107.677 142.797 104.31 142.8H60.1299C56.7616 142.8 53.5314 141.462 51.1497 139.08C48.7679 136.698 47.4299 133.468 47.4299 130.1V116C54.4999 114.48 65.2701 114 78.3501 119.22L86.4399 111.5L91.96 125.5C91.96 125.5 93.44 120.35 98.22 121.08C103 121.81 110.74 124.4 114.05 122.19C114.942 121.675 115.99 121.501 117 121.7Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M101.54 94.9498C104.252 94.9498 106.45 92.7516 106.45 90.0399C106.45 87.3282 104.252 85.1299 101.54 85.1299C98.8283 85.1299 96.6299 87.3282 96.6299 90.0399C96.6299 92.7516 98.8283 94.9498 101.54 94.9498Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2598" },
                React.createElement("rect", { width: "1em", height: "1em", fill: "white" }))));
}
exports.default = TiffIconSingleColor;
