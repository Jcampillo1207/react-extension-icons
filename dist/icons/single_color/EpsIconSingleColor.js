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
function EpsIconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2546)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140.38 49.24C134.913 49.2347 129.671 47.0606 125.805 43.1947C121.939 39.3288 119.765 34.0871 119.76 28.62V0H27.63C24.0948 0 20.5942 0.696338 17.3281 2.04919C14.062 3.40205 11.0945 5.38489 8.59473 7.88464C6.09497 10.3844 4.11201 13.3521 2.75916 16.6182C1.4063 19.8842 0.709961 23.3849 0.709961 26.92V189.13C0.709961 192.665 1.4063 196.166 2.75916 199.432C4.11201 202.698 6.09497 205.666 8.59473 208.165C11.0945 210.665 14.062 212.648 17.3281 214.001C20.5942 215.354 24.0948 216.05 27.63 216.05H138.23C141.765 216.05 145.265 215.354 148.53 214.001C151.796 212.648 154.763 210.665 157.262 208.165C159.761 205.665 161.743 202.697 163.094 199.431C164.446 196.165 165.141 192.665 165.14 189.13V49.25L140.38 49.24Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M165.14 49.24H140.38C134.913 49.2347 129.671 47.0606 125.805 43.1947C121.939 39.3288 119.765 34.0871 119.76 28.62V0L165.14 49.24Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M184.66 170.6H59.62C50.7503 170.6 43.5601 177.79 43.5601 186.66V223.94C43.5601 232.81 50.7503 240 59.62 240H184.66C193.53 240 200.72 232.81 200.72 223.94V186.66C200.72 177.79 193.53 170.6 184.66 170.6Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M88 213.37V220.65H80.47V213.37H88Z", fill: "white" }),
            React.createElement("path", { d: "M99.05 196.36V202.65H109.21V208.14H99.05V214.82H110.49V220.65H91.77V190.58H110.49V196.36H99.05Z", fill: "white" }),
            React.createElement("path", { d: "M121.89 210.1V220.65H114.61V190.58H126.39C129.97 190.58 132.693 191.463 134.56 193.23C135.506 194.161 136.245 195.28 136.729 196.516C137.214 197.751 137.432 199.075 137.37 200.4C137.401 202.149 136.967 203.875 136.11 205.4C135.245 206.895 133.948 208.094 132.39 208.84C130.519 209.732 128.462 210.164 126.39 210.1H121.89ZM129.97 200.4C129.97 197.733 128.51 196.4 125.59 196.4H121.89V204.23H125.59C128.53 204.257 130 202.98 130 200.4H129.97Z", fill: "white" }),
            React.createElement("path", { d: "M161.33 216.56C160.473 217.946 159.233 219.054 157.76 219.75C155.974 220.593 154.014 221.001 152.04 220.94C149.065 221.06 146.134 220.195 143.7 218.48C142.629 217.671 141.752 216.632 141.134 215.44C140.517 214.248 140.173 212.932 140.13 211.59H147.87C147.934 212.601 148.365 213.553 149.08 214.27C149.802 214.939 150.757 215.298 151.74 215.27C152.548 215.319 153.343 215.046 153.95 214.51C154.217 214.251 154.427 213.94 154.566 213.596C154.705 213.251 154.772 212.882 154.76 212.51C154.77 212.157 154.71 211.805 154.583 211.476C154.456 211.146 154.265 210.845 154.02 210.59C153.491 210.056 152.863 209.632 152.17 209.34C151.43 209.013 150.41 208.624 149.11 208.17C147.516 207.647 145.959 207.015 144.45 206.28C143.206 205.638 142.138 204.7 141.34 203.55C140.425 202.159 139.974 200.514 140.05 198.85C140.008 197.203 140.484 195.583 141.41 194.22C142.353 192.883 143.657 191.843 145.17 191.22C146.919 190.514 148.794 190.174 150.68 190.22C153.542 190.059 156.371 190.901 158.68 192.6C159.645 193.38 160.438 194.352 161.009 195.453C161.58 196.555 161.918 197.762 162 199H154.13C154.042 198.115 153.662 197.285 153.05 196.64C152.736 196.343 152.365 196.112 151.959 195.963C151.554 195.813 151.122 195.748 150.69 195.77C149.942 195.732 149.208 195.974 148.63 196.45C148.357 196.703 148.144 197.014 148.007 197.36C147.87 197.706 147.813 198.079 147.84 198.45C147.831 198.782 147.889 199.111 148.009 199.42C148.129 199.729 148.31 200.012 148.54 200.25C149.043 200.77 149.645 201.185 150.31 201.47C151.02 201.78 152.04 202.18 153.37 202.66C154.991 203.181 156.568 203.826 158.09 204.59C159.344 205.26 160.423 206.216 161.24 207.38C162.171 208.788 162.633 210.454 162.56 212.14C162.575 213.7 162.149 215.232 161.33 216.56Z", fill: "white" }),
            React.createElement("path", { d: "M123.74 127.73H121.25C121.237 117.638 117.221 107.964 110.084 100.829C102.947 93.6937 93.2719 89.6807 83.1801 89.6702C73.0892 89.6808 63.4145 93.694 56.2792 100.829C49.1438 107.965 45.1306 117.639 45.12 127.73H42.63C42.6432 116.98 46.9198 106.673 54.5215 99.0715C62.1232 91.4698 72.4296 87.1934 83.1801 87.1802C93.9323 87.1908 104.241 91.466 111.845 99.068C119.449 106.67 123.727 116.978 123.74 127.73Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M140.81 87.1802H25.55V89.6702H140.81V87.1802Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M47.86 123.75H39.89V131.72H47.86V123.75Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M126.48 123.75H118.51V131.72H126.48V123.75Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M87.17 84.3101H79.2V92.28H87.17V84.3101Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M25.42 92.29C27.6237 92.29 29.41 90.5037 29.41 88.3C29.41 86.0964 27.6237 84.3101 25.42 84.3101C23.2164 84.3101 21.4301 86.0964 21.4301 88.3C21.4301 90.5037 23.2164 92.29 25.42 92.29Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M140.43 92.29C142.634 92.29 144.42 90.5037 144.42 88.3C144.42 86.0964 142.634 84.3101 140.43 84.3101C138.226 84.3101 136.44 86.0964 136.44 88.3C136.44 90.5037 138.226 92.29 140.43 92.29Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2546" },
                React.createElement("rect", { width: 200.01, height: 240, fill: "white", transform: "translate(0.709961)" }))));
}
exports.default = EpsIconSingleColor;
