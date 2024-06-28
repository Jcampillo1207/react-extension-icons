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
function PptIconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 200 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2359)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M139.67 49.25C134.203 49.2447 128.961 47.0704 125.095 43.2046C121.229 39.3387 119.055 34.097 119.05 28.6299V0H26.9099C19.7729 0 12.9284 2.83523 7.88184 7.88184C2.83523 12.9284 0 19.7729 0 26.9099V189.13C0 196.267 2.83523 203.112 7.88184 208.158C12.9284 213.205 19.7729 216.04 26.9099 216.04H137.51C141.045 216.041 144.545 215.346 147.811 213.994C151.077 212.643 154.045 210.661 156.545 208.162C159.045 205.663 161.028 202.696 162.381 199.43C163.734 196.165 164.43 192.665 164.43 189.13V49.25H139.67Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M164.43 49.25H139.67C134.203 49.2447 128.961 47.0704 125.095 43.2046C121.229 39.3387 119.055 34.097 119.05 28.6299V0L164.43 49.25Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M183.94 170.61H58.8999C50.0302 170.61 42.8401 177.8 42.8401 186.67V223.95C42.8401 232.82 50.0302 240.01 58.8999 240.01H183.94C192.81 240.01 200 232.82 200 223.95V186.67C200 177.8 192.81 170.61 183.94 170.61Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M86.8 213.38V220.65H79.27V213.38H86.8Z", fill: "white" }),
            React.createElement("path", { d: "M97.8601 210.1V220.65H90.5901V190.58H102.37C105.943 190.58 108.663 191.467 110.53 193.24C111.478 194.169 112.218 195.289 112.702 196.524C113.186 197.76 113.404 199.084 113.34 200.41C113.372 202.158 112.94 203.883 112.09 205.41C111.216 206.904 109.918 208.105 108.36 208.86C106.488 209.749 104.431 210.178 102.36 210.11L97.8601 210.1ZM105.94 200.41C105.94 197.743 104.48 196.41 101.56 196.41H97.8601V204.24H101.56C104.48 204.267 105.94 202.99 105.94 200.41Z", fill: "white" }),
            React.createElement("path", { d: "M124.19 210.1V220.65H116.91V190.58H128.69C132.27 190.58 134.993 191.467 136.86 193.24C137.808 194.169 138.548 195.289 139.032 196.524C139.516 197.76 139.734 199.084 139.67 200.41C139.703 202.159 139.268 203.885 138.41 205.41C137.542 206.906 136.247 208.107 134.69 208.86C132.818 209.749 130.761 210.178 128.69 210.11L124.19 210.1ZM132.27 200.41C132.27 197.743 130.81 196.41 127.89 196.41H124.19V204.24H127.89C130.81 204.267 132.27 202.99 132.27 200.41Z", fill: "white" }),
            React.createElement("path", { d: "M164.85 190.58V196.37H156.68V220.65H149.37V196.37H141.28V190.58H164.85Z", fill: "white" }),
            React.createElement("path", { d: "M74.6899 83.73H31C30.0072 83.73 29.0548 83.3364 28.3518 82.6353C27.6488 81.9342 27.2526 80.9828 27.25 79.99C27.25 78.9954 27.6451 78.0416 28.3484 77.3384C29.0517 76.6351 30.0054 76.24 31 76.24H74.6499C75.6445 76.24 76.5985 76.6351 77.3018 77.3384C78.005 78.0416 78.3999 78.9954 78.3999 79.99C78.3973 80.9759 78.0066 81.9211 77.3123 82.6211C76.6179 83.3211 75.6758 83.7195 74.6899 83.73Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M74.6899 106.1H31C30.0072 106.1 29.0548 105.706 28.3518 105.005C27.6488 104.304 27.2526 103.353 27.25 102.36C27.25 101.366 27.6451 100.412 28.3484 99.7083C29.0517 99.005 30.0054 98.6101 31 98.6101H74.6499C75.6445 98.6101 76.5985 99.005 77.3018 99.7083C78.005 100.412 78.3999 101.366 78.3999 102.36C78.3973 103.346 78.0066 104.291 77.3123 104.991C76.6179 105.691 75.6758 106.09 74.6899 106.1Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M74.6899 128.47H31C30.0054 128.47 29.0517 128.075 28.3484 127.372C27.6451 126.668 27.25 125.715 27.25 124.72C27.2579 123.731 27.6565 122.784 28.3589 122.088C29.0613 121.391 30.0106 121 31 121H74.6499C75.6427 121 76.5951 121.394 77.2981 122.095C78.0011 122.796 78.3973 123.747 78.3999 124.74C78.3947 125.724 78.0029 126.667 77.3088 127.365C76.6148 128.063 75.6741 128.459 74.6899 128.47Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M74.6899 150.84H31C30.0054 150.84 29.0517 150.445 28.3484 149.742C27.6451 149.038 27.25 148.085 27.25 147.09C27.2526 146.097 27.6488 145.146 28.3518 144.445C29.0548 143.744 30.0072 143.35 31 143.35H74.6499C75.6427 143.35 76.5951 143.744 77.2981 144.445C78.0011 145.146 78.3973 146.097 78.3999 147.09C78.4 148.078 78.0106 149.025 77.3159 149.728C76.6213 150.43 75.6776 150.83 74.6899 150.84Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M117.25 118V84.76C109.152 85.1876 101.527 88.7053 95.9451 94.5881C90.3636 100.471 87.2515 108.271 87.25 116.38C87.2487 120.538 88.0666 124.656 89.6572 128.497C91.2478 132.339 93.5799 135.83 96.52 138.77C99.4602 141.71 102.951 144.042 106.793 145.633C110.634 147.223 114.752 148.041 118.91 148.04C127.019 148.041 134.819 144.929 140.701 139.347C146.582 133.765 150.097 126.138 150.52 118.04L117.25 118Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M123.31 82.23V112.23H153.31C152.909 104.403 149.62 97.0033 144.078 91.4617C138.537 85.9201 131.137 82.6306 123.31 82.23Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2359" },
                React.createElement("rect", { width: 200, height: 240.01, fill: "white" }))));
}
exports.default = PptIconSingleColor;
