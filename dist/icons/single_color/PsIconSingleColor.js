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
function PsIconSingleColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 200 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: props.color || "#4690FF", d: "M139.67 49.24C134.203 49.2347 128.961 47.0606 125.095 43.1947C121.229 39.3288 119.055 34.0871 119.05 28.62V0H26.91C19.773 0 12.9284 2.83511 7.88176 7.88171C2.83516 12.9283 0 19.7731 0 26.91V189.12C0.0079507 196.252 2.84661 203.089 7.89235 208.129C12.9381 213.169 19.7782 216 26.91 216H137.51C141.045 216 144.546 215.304 147.812 213.951C151.078 212.598 154.046 210.615 156.545 208.115C159.045 205.616 161.028 202.648 162.381 199.382C163.734 196.116 164.43 192.615 164.43 189.08V49.2L139.67 49.24Z", opacity: 0.3 }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M164.43 49.24H139.67C134.203 49.2347 128.961 47.0606 125.095 43.1947 121.229 39.3288 119.055 34.0871 119.05 28.62V0L164.43 49.24ZM183.94 170.6H58.9C50.0303 170.6 42.84 177.79 42.84 186.66V223.94C42.84 232.81 50.0303 240 58.9 240H183.94C192.81 240 200 232.81 200 223.94V186.66C200 177.79 192.81 170.6 183.94 170.6Z" }),
            React.createElement("path", { fill: "#fff", d: "M98.12 213.37V220.65H90.59V213.37H98.12ZM109.18 210.1V220.65H101.9V190.58H113.69C117.257 190.58 119.977 191.463 121.85 193.23 122.796 194.161 123.535 195.28 124.019 196.516 124.504 197.751 124.722 199.075 124.66 200.4 124.691 202.149 124.257 203.875 123.4 205.4 122.535 206.895 121.238 208.094 119.68 208.84 117.809 209.732 115.752 210.164 113.68 210.1H109.18ZM117.26 200.4C117.26 197.733 115.8 196.4 112.88 196.4H109.18V204.23H112.88C115.8 204.257 117.26 202.98 117.26 200.4ZM148.63 216.56C147.769 217.946 146.526 219.054 145.05 219.75 143.264 220.593 141.304 221.001 139.33 220.94 136.358 221.062 133.429 220.197 131 218.48 129.924 217.675 129.043 216.637 128.423 215.444 127.803 214.251 127.46 212.934 127.42 211.59H135.16C135.224 212.603 135.658 213.557 136.38 214.27 137.097 214.94 138.049 215.299 139.03 215.27 139.841 215.317 140.638 215.045 141.25 214.51 141.513 214.249 141.72 213.937 141.858 213.593 141.996 213.249 142.061 212.881 142.05 212.51 142.063 212.157 142.004 211.804 141.876 211.474 141.749 211.144 141.557 210.844 141.31 210.59 140.781 210.056 140.153 209.632 139.46 209.34 138.72 209.013 137.7 208.623 136.4 208.17 134.806 207.647 133.249 207.015 131.74 206.28 130.496 205.637 129.428 204.7 128.63 203.55 127.715 202.159 127.264 200.514 127.34 198.85 127.298 197.202 127.774 195.583 128.7 194.22 129.645 192.885 130.949 191.845 132.46 191.22 134.209 190.514 136.084 190.174 137.97 190.22 140.832 190.062 143.66 190.903 145.97 192.6 146.951 193.399 147.754 194.395 148.328 195.523 148.901 196.651 149.233 197.886 149.3 199.15H141.44C141.342 198.266 140.96 197.438 140.35 196.79 140.036 196.493 139.665 196.262 139.259 196.113 138.854 195.963 138.422 195.898 137.99 195.92 137.243 195.882 136.508 196.124 135.93 196.6 135.657 196.853 135.444 197.164 135.307 197.51 135.17 197.856 135.113 198.229 135.14 198.6 135.131 198.932 135.189 199.261 135.309 199.57 135.429 199.879 135.61 200.161 135.84 200.4 136.343 200.92 136.945 201.335 137.61 201.62 138.32 201.93 139.34 202.33 140.67 202.81 142.291 203.331 143.869 203.976 145.39 204.74 146.644 205.41 147.723 206.366 148.54 207.53 149.471 208.938 149.933 210.604 149.86 212.29 149.843 213.798 149.418 215.274 148.63 216.56Z" }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M50.06 130.81C50.06 130.81 43.54 116.98 51.97 103.48C51.97 103.48 54.46 110.74 56.51 110.26C56.51 110.26 53.9 99.8502 55.82 96.7702C55.82 96.7702 64.14 84.8502 73.33 78.4002C73.33 78.4002 73.62 85.4901 75.78 86.0701C75.78 86.0701 75.44 81.6901 78.49 75.0701C78.49 75.0701 93.29 63.6701 117.99 64.7101C117.99 64.7101 108.24 79.8002 102.76 89.9902C99.8648 95.4882 96.6803 100.829 93.22 105.99C93.22 105.99 85.96 110.24 81.22 109.84C81.22 109.84 85.22 112.98 89.56 111.42C89.56 111.42 78.51 131.42 57.07 133.95C57.07 133.95 53.07 142.18 52.27 149.38C52.27 149.38 48.27 151.8 46.39 151.38C46.39 151.38 56.76 111.54 92.11 82.6901C92.16 82.6901 71.78 88.0802 50.06 130.81Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240H0z" }))));
}
exports.default = PsIconSingleColor;
