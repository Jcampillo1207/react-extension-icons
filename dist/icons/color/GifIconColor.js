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
function GifIconColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_565)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M139.81 49.24C134.343 49.2347 129.101 47.0606 125.235 43.1947C121.369 39.3288 119.195 34.0871 119.19 28.62V1.85821e-06H27.0601C23.5253 -0.00131167 20.0249 0.693768 16.7589 2.04553C13.4929 3.3973 10.5252 5.37928 8.02527 7.87824C5.52538 10.3772 3.54231 13.3442 2.18933 16.6097C0.836352 19.8752 0.140014 23.3753 0.140015 26.91V189.13C0.150615 196.262 2.99181 203.098 8.03943 208.136C13.087 213.174 19.9283 216.003 27.0601 216H137.66C144.797 216 151.642 213.165 156.688 208.118C161.735 203.072 164.57 196.227 164.57 189.09V49.24H139.81Z", fill: "#FF9908" })),
            React.createElement("path", { d: "M164.57 49.24H139.81C134.343 49.2347 129.101 47.0606 125.235 43.1947C121.369 39.3288 119.195 34.0871 119.19 28.62V0L164.57 49.24Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M184.09 170.6H59.05C50.1803 170.6 42.99 177.79 42.99 186.66V223.94C42.99 232.81 50.1803 240 59.05 240H184.09C192.96 240 200.15 232.81 200.15 223.94V186.66C200.15 177.79 192.96 170.6 184.09 170.6Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M90.6 213.37V220.64H83.0699V213.37H90.6Z", fill: "white" }),
            React.createElement("path", { d: "M117.78 193C120.207 194.816 121.837 197.5 122.33 200.49H114.63C114.125 199.415 113.31 198.517 112.29 197.91C111.148 197.23 109.839 196.884 108.51 196.91C107.475 196.867 106.444 197.052 105.489 197.451C104.533 197.85 103.677 198.454 102.98 199.22C101.515 200.974 100.769 203.218 100.89 205.5C100.89 208.36 101.62 210.557 103.08 212.09C103.902 212.887 104.882 213.503 105.957 213.899C107.032 214.295 108.177 214.462 109.32 214.39C110.951 214.418 112.548 213.916 113.87 212.96C115.213 211.949 116.184 210.521 116.63 208.9H107.44V203.67H122.71V211C122.126 212.79 121.203 214.45 119.99 215.89C118.678 217.439 117.048 218.688 115.21 219.55C113.124 220.512 110.847 220.991 108.55 220.95C105.759 221.022 102.998 220.353 100.55 219.01C98.3088 217.751 96.4814 215.868 95.2901 213.59C94.0269 211.133 93.3912 208.402 93.44 205.64C93.3846 202.861 94.0204 200.112 95.2901 197.64C96.4793 195.367 98.2986 193.485 100.53 192.22C102.943 190.891 105.666 190.225 108.42 190.29C111.755 190.126 115.049 191.08 117.78 193Z", fill: "white" }),
            React.createElement("path", { d: "M134.07 190.57V220.64H126.8V190.57H134.07Z", fill: "white" }),
            React.createElement("path", { d: "M158.7 190.57V196.36H146.36V203H155.89V208.53H146.36V220.69H139.09V190.62L158.7 190.57Z", fill: "white" }),
            React.createElement("path", { d: "M77.78 154.43C66.8704 154.417 56.4114 150.077 48.6971 142.363C40.9829 134.649 36.6432 124.19 36.63 113.28C36.6432 102.37 40.9829 91.9114 48.6971 84.1971C56.4114 76.4829 66.8704 72.1432 77.78 72.13C88.6896 72.1432 99.1485 76.4829 106.863 84.1971C114.577 91.9114 118.917 102.37 118.93 113.28C118.917 124.19 114.577 134.649 106.863 142.363C99.1485 150.077 88.6896 154.417 77.78 154.43ZM77.78 79.34C68.7835 79.3559 60.1599 82.9368 53.7983 89.2983C47.4368 95.6599 43.8558 104.283 43.84 113.28C43.8558 122.277 47.4368 130.9 53.7983 137.262C60.1599 143.623 68.7835 147.204 77.78 147.22C86.7766 147.204 95.4002 143.623 101.762 137.262C108.123 130.9 111.704 122.277 111.72 113.28C111.704 104.283 108.123 95.6599 101.762 89.2983C95.4002 82.9368 86.7766 79.3559 77.78 79.34Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M77.78 136.34C73.0778 136.347 68.4467 135.192 64.2982 132.978C60.1497 130.764 56.6122 127.56 54 123.65L60 119.65C61.9512 122.571 64.5929 124.965 67.6909 126.62C70.7889 128.276 74.2475 129.141 77.76 129.14C81.2738 129.142 84.7336 128.276 87.8319 126.618C90.9303 124.961 93.5712 122.564 95.52 119.64L101.52 123.64C98.9134 127.547 95.3829 130.75 91.2417 132.965C87.1005 135.181 82.4766 136.34 77.78 136.34Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M66.3701 106.97C69.0155 106.97 71.16 104.825 71.16 102.18C71.16 99.5346 69.0155 97.39 66.3701 97.39C63.7246 97.39 61.5801 99.5346 61.5801 102.18C61.5801 104.825 63.7246 106.97 66.3701 106.97Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M89.19 106.97C91.8354 106.97 93.98 104.825 93.98 102.18C93.98 99.5346 91.8354 97.39 89.19 97.39C86.5446 97.39 84.4 99.5346 84.4 102.18C84.4 104.825 86.5446 106.97 89.19 106.97Z", fill: "#FF9908" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_565" },
                React.createElement("rect", { width: 200.01, height: 240, fill: "white", transform: "translate(0.140015)" }))));
}
exports.default = GifIconColor;
