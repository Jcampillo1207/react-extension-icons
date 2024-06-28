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
function AiIconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 200 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2496)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M139.67 49.25C134.202 49.2421 128.96 47.0657 125.095 43.1982C121.229 39.3308 119.055 34.0881 119.05 28.62V0H26.9099C19.7729 0 12.9284 2.83511 7.88184 7.88171C2.83523 12.9283 0 19.7731 0 26.91V189.13C0 196.267 2.83523 203.112 7.88184 208.158C12.9284 213.205 19.7729 216.04 26.9099 216.04H137.51C141.045 216.041 144.545 215.346 147.811 213.995C151.077 212.643 154.045 210.661 156.545 208.162C159.045 205.663 161.028 202.696 162.381 199.43C163.734 196.165 164.43 192.665 164.43 189.13V49.25H139.67Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M164.43 49.25H139.67C134.202 49.2421 128.96 47.0657 125.095 43.1982C121.229 39.3308 119.055 34.0881 119.05 28.62V0L164.43 49.25Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M183.94 170.61H58.8999C50.0302 170.61 42.8401 177.8 42.8401 186.67V223.95C42.8401 232.82 50.0302 240.01 58.8999 240.01H183.94C192.81 240.01 200 232.82 200 223.95V186.67C200 177.8 192.81 170.61 183.94 170.61Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M103.79 213.38V220.65H96.26V213.38H103.79Z", fill: "white" }),
            React.createElement("path", { d: "M126.21 215.16H114.93L113.06 220.65H105.41L116.41 190.79H124.79L135.79 220.65H128.05L126.21 215.16ZM124.33 209.63L120.59 198.57L116.81 209.63H124.33Z", fill: "white" }),
            React.createElement("path", { d: "M145.9 190.58V220.65H138.63V190.58H145.9Z", fill: "white" }),
            React.createElement("path", { d: "M76.0701 114.08C76.0166 113.645 76.0636 113.203 76.2075 112.789C76.3514 112.374 76.5881 111.998 76.8999 111.69C77.1729 111.417 77.4973 111.2 77.8542 111.052C78.2111 110.904 78.5936 110.828 78.98 110.828C79.3663 110.828 79.7488 110.904 80.1057 111.052C80.4626 111.2 80.787 111.417 81.0601 111.69C81.3334 111.963 81.5501 112.287 81.698 112.644C81.8459 113.001 81.9221 113.384 81.9221 113.77C81.9221 114.156 81.8459 114.539 81.698 114.896C81.5501 115.253 81.3334 115.577 81.0601 115.85C80.7516 116.162 80.3757 116.399 79.9614 116.543C79.5471 116.686 79.1052 116.734 78.6699 116.68L44.51 150.84L95.51 125.84C95.51 125.84 101.24 104.5 107.74 97.99L94.74 84.99C88.23 91.49 66.8899 97.22 66.8899 97.22L41.8899 148.22L76.0701 114.08Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M122.518 90.406L102.344 70.2322L92.4518 80.1246L112.626 100.298L122.518 90.406Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2496" },
                React.createElement("rect", { width: 200, height: 240.01, fill: "white" }))));
}
exports.default = AiIconSingleColor;
