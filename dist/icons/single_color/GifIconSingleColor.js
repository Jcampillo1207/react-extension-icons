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
function GifIconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2653)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M139.81 49.24C134.343 49.2347 129.101 47.0606 125.235 43.1947C121.37 39.3288 119.195 34.0871 119.19 28.62V1.85821e-06H27.0602C23.5255 -0.00131167 20.0251 0.693768 16.759 2.04553C13.493 3.3973 10.5253 5.37928 8.02539 7.87824C5.52551 10.3772 3.54243 13.3442 2.18945 16.6097C0.836474 19.8752 0.140136 23.3753 0.140137 26.91V189.13C0.150737 196.262 2.99193 203.098 8.03955 208.136C13.0872 213.174 19.9284 216.003 27.0602 216H137.66C144.797 216 151.642 213.165 156.688 208.118C161.735 203.072 164.57 196.227 164.57 189.09V49.24H139.81Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M164.57 49.24H139.81C134.343 49.2347 129.101 47.0606 125.235 43.1947C121.37 39.3288 119.195 34.0871 119.19 28.62V0L164.57 49.24Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M184.09 170.6H59.0501C50.1804 170.6 42.9901 177.79 42.9901 186.66V223.94C42.9901 232.81 50.1804 240 59.0501 240H184.09C192.96 240 200.15 232.81 200.15 223.94V186.66C200.15 177.79 192.96 170.6 184.09 170.6Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M90.6001 213.37V220.64H83.0701V213.37H90.6001Z", fill: "white" }),
            React.createElement("path", { d: "M117.78 193C120.207 194.816 121.837 197.5 122.33 200.49H114.63C114.125 199.415 113.31 198.517 112.29 197.91C111.148 197.23 109.839 196.884 108.51 196.91C107.476 196.867 106.444 197.052 105.489 197.451C104.533 197.85 103.677 198.454 102.98 199.22C101.516 200.974 100.769 203.218 100.89 205.5C100.89 208.36 101.62 210.557 103.08 212.09C103.903 212.887 104.883 213.503 105.957 213.899C107.032 214.295 108.177 214.462 109.32 214.39C110.952 214.418 112.548 213.916 113.87 212.96C115.213 211.949 116.184 210.521 116.63 208.9H107.44V203.67H122.71V211C122.127 212.79 121.203 214.45 119.99 215.89C118.678 217.439 117.048 218.688 115.21 219.55C113.124 220.512 110.847 220.991 108.55 220.95C105.759 221.022 102.998 220.353 100.55 219.01C98.3089 217.751 96.4815 215.868 95.2902 213.59C94.027 211.133 93.3914 208.402 93.4401 205.64C93.3847 202.861 94.0205 200.112 95.2902 197.64C96.4794 195.367 98.2987 193.485 100.53 192.22C102.943 190.891 105.666 190.225 108.42 190.29C111.755 190.126 115.049 191.08 117.78 193Z", fill: "white" }),
            React.createElement("path", { d: "M134.07 190.57V220.64H126.8V190.57H134.07Z", fill: "white" }),
            React.createElement("path", { d: "M158.7 190.57V196.36H146.36V203H155.89V208.53H146.36V220.69H139.09V190.62L158.7 190.57Z", fill: "white" }),
            React.createElement("path", { d: "M77.7802 154.43C66.8706 154.417 56.4115 150.077 48.6973 142.363C40.983 134.648 36.6434 124.19 36.6301 113.28C36.6434 102.37 40.983 91.9113 48.6973 84.197C56.4115 76.4828 66.8706 72.1431 77.7802 72.1299C88.6897 72.1431 99.1487 76.4828 106.863 84.197C114.577 91.9113 118.917 102.37 118.93 113.28C118.917 124.19 114.577 134.648 106.863 142.363C99.1487 150.077 88.6897 154.417 77.7802 154.43ZM77.7802 79.3399C68.7836 79.3558 60.16 82.9367 53.7985 89.2982C47.4369 95.6598 43.856 104.283 43.8401 113.28C43.856 122.276 47.4369 130.9 53.7985 137.262C60.16 143.623 68.7836 147.204 77.7802 147.22C86.7767 147.204 95.4003 143.623 101.762 137.262C108.123 130.9 111.704 122.276 111.72 113.28C111.704 104.283 108.123 95.6598 101.762 89.2982C95.4003 82.9367 86.7767 79.3558 77.7802 79.3399Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M77.7802 136.34C73.0779 136.347 68.4468 135.192 64.2983 132.978C60.1498 130.764 56.6123 127.56 54.0001 123.65L60.0001 119.65C61.9513 122.571 64.5931 124.965 67.691 126.62C70.789 128.276 74.2476 129.141 77.7601 129.14C81.2739 129.142 84.7337 128.276 87.832 126.618C90.9304 124.961 93.5713 122.564 95.5201 119.64L101.52 123.64C98.9135 127.547 95.383 130.75 91.2418 132.965C87.1006 135.181 82.4767 136.34 77.7802 136.34Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M66.3702 106.97C69.0156 106.97 71.1602 104.826 71.1602 102.18C71.1602 99.5347 69.0156 97.3901 66.3702 97.3901C63.7247 97.3901 61.5802 99.5347 61.5802 102.18C61.5802 104.826 63.7247 106.97 66.3702 106.97Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M89.1901 106.97C91.8356 106.97 93.9801 104.826 93.9801 102.18C93.9801 99.5347 91.8356 97.3901 89.1901 97.3901C86.5447 97.3901 84.4001 99.5347 84.4001 102.18C84.4001 104.826 86.5447 106.97 89.1901 106.97Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2653" },
                React.createElement("rect", { width: 200.01, height: 240, fill: "white", transform: "translate(0.140137)" }))));
}
exports.default = GifIconSingleColor;
