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
function IsoIconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2416)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140.38 49.25C134.912 49.2421 129.67 47.0657 125.805 43.1982C121.939 39.3308 119.765 34.0881 119.76 28.62V1.85821e-06H27.63C24.0953 -0.00131167 20.5949 0.693768 17.3289 2.04553C14.0628 3.3973 11.0952 5.37922 8.59534 7.87818C6.09545 10.3771 4.11238 13.3441 2.7594 16.6096C1.40642 19.8751 0.709961 23.3753 0.709961 26.91V189.13C0.709961 192.665 1.40642 196.165 2.7594 199.43C4.11238 202.696 6.09545 205.663 8.59534 208.162C11.0952 210.661 14.0628 212.643 17.3289 213.995C20.5949 215.346 24.0953 216.041 27.63 216.04H138.23C141.764 216.04 145.263 215.344 148.528 213.992C151.793 212.639 154.759 210.657 157.258 208.158C159.757 205.659 161.739 202.693 163.092 199.428C164.444 196.163 165.14 192.664 165.14 189.13V49.25H140.38Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M165.14 49.25H140.38C134.912 49.2421 129.67 47.0657 125.805 43.1982C121.939 39.3308 119.765 34.0881 119.76 28.62V0L165.14 49.25Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M184.66 170.61H59.62C50.7503 170.61 43.5601 177.8 43.5601 186.67V223.95C43.5601 232.82 50.7503 240.01 59.62 240.01H184.66C193.53 240.01 200.72 232.82 200.72 223.95V186.67C200.72 177.8 193.53 170.61 184.66 170.61Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M89.65 213.38V220.65H82.12V213.38H89.65Z", fill: "white" }),
            React.createElement("path", { d: "M100.7 190.58V220.65H93.4301V190.58H100.7Z", fill: "white" }),
            React.createElement("path", { d: "M126.12 216.57C125.253 217.951 124.012 219.058 122.54 219.76C120.753 220.598 118.793 221.006 116.82 220.95C113.847 221.068 110.918 220.199 108.49 218.48C107.413 217.676 106.531 216.638 105.911 215.445C105.291 214.252 104.949 212.934 104.91 211.59H112.66C112.708 212.604 113.141 213.563 113.87 214.27C114.59 214.941 115.546 215.301 116.53 215.27C117.339 215.312 118.132 215.036 118.74 214.5C119.007 214.241 119.217 213.93 119.356 213.585C119.496 213.241 119.562 212.871 119.55 212.5C119.561 212.147 119.5 211.796 119.371 211.468C119.242 211.14 119.048 210.841 118.8 210.59C118.271 210.054 117.642 209.626 116.95 209.33C116.21 209.01 115.19 208.62 113.89 208.16C112.296 207.635 110.739 207.003 109.23 206.27C107.992 205.628 106.928 204.694 106.13 203.55C105.209 202.161 104.753 200.515 104.83 198.85C104.788 197.199 105.263 195.577 106.19 194.21C107.14 192.875 108.446 191.836 109.96 191.21C111.706 190.504 113.578 190.163 115.46 190.21C118.322 190.05 121.151 190.891 123.46 192.59C124.441 193.39 125.245 194.385 125.82 195.513C126.395 196.641 126.729 197.876 126.8 199.14H118.93C118.84 198.254 118.456 197.423 117.84 196.78C117.526 196.482 117.155 196.251 116.75 196.102C116.344 195.952 115.912 195.887 115.48 195.91C114.733 195.872 113.998 196.114 113.42 196.59C113.148 196.844 112.937 197.155 112.8 197.501C112.663 197.847 112.605 198.219 112.63 198.59C112.618 199.263 112.874 199.914 113.34 200.4C113.838 200.919 114.437 201.33 115.1 201.61C115.81 201.92 116.83 202.32 118.16 202.8C119.781 203.324 121.359 203.972 122.88 204.74C124.136 205.403 125.216 206.356 126.03 207.52C126.961 208.928 127.423 210.594 127.35 212.28C127.338 213.795 126.913 215.279 126.12 216.57Z", fill: "white" }),
            React.createElement("path", { d: "M153.38 192.09C155.665 193.389 157.555 195.283 158.85 197.57C160.203 199.995 160.893 202.734 160.85 205.51C160.905 208.307 160.214 211.068 158.85 213.51C157.552 215.809 155.655 217.714 153.36 219.02C151.022 220.355 148.372 221.045 145.68 221.02C142.988 221.044 140.338 220.354 138 219.02C135.706 217.716 133.811 215.811 132.52 213.51C131.151 211.07 130.46 208.307 130.52 205.51C130.468 202.733 131.158 199.991 132.52 197.57C133.818 195.282 135.712 193.388 138 192.09C140.338 190.756 142.988 190.066 145.68 190.09C148.378 190.065 151.035 190.755 153.38 192.09ZM139.98 199.19C138.504 200.954 137.753 203.213 137.88 205.51C137.761 207.797 138.511 210.044 139.98 211.8C140.699 212.581 141.579 213.195 142.561 213.599C143.542 214.004 144.6 214.188 145.66 214.14C146.717 214.184 147.77 213.997 148.748 213.593C149.725 213.189 150.603 212.577 151.32 211.8C152.802 210.05 153.56 207.8 153.44 205.51C153.561 203.22 152.81 200.97 151.34 199.21C150.622 198.429 149.741 197.814 148.76 197.41C147.778 197.005 146.72 196.821 145.66 196.87C144.605 196.826 143.553 197.011 142.576 197.411C141.6 197.812 140.721 198.419 140 199.19H139.98Z", fill: "white" }),
            React.createElement("path", { d: "M79.21 145.6C69.7821 145.589 60.7435 141.839 54.077 135.173C47.4105 128.506 43.6606 119.468 43.65 110.04C43.6606 100.612 47.4105 91.5735 54.077 84.907C60.7435 78.2405 69.7821 74.4906 79.21 74.48C88.6378 74.4906 97.6765 78.2405 104.343 84.907C111.01 91.5735 114.759 100.612 114.77 110.04C114.759 119.468 111.01 128.506 104.343 135.173C97.6765 141.839 88.6378 145.589 79.21 145.6ZM79.21 76.6C70.3542 76.6079 61.8634 80.1294 55.6014 86.3914C49.3394 92.6534 45.818 101.144 45.8101 110C45.8206 118.855 49.3429 127.344 55.6044 133.606C61.8658 139.867 70.355 143.389 79.21 143.4C88.0649 143.389 96.5543 139.867 102.816 133.606C109.077 127.344 112.599 118.855 112.61 110C112.591 101.151 109.065 92.6706 102.804 86.4172C96.5436 80.1639 88.0588 76.6479 79.21 76.64V76.6Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M79.26 75.3699V103.65C77.567 103.653 75.9443 104.327 74.7481 105.525C73.5519 106.723 72.88 108.347 72.88 110.04C72.8804 111.152 73.1698 112.244 73.72 113.21L49.35 127.28L48.8101 126.28C46.1149 121.255 44.7062 115.642 44.71 109.94C44.71 109.66 44.71 109.4 44.71 109.14C44.8321 103.233 46.475 97.457 49.48 92.3699C52.47 87.3134 56.6911 83.0957 61.75 80.1099C66.8359 77.1107 72.607 75.4682 78.51 75.3398L79.26 75.3699Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M113.86 110C113.864 115.959 112.321 121.817 109.38 127C106.296 132.463 101.78 136.981 96.3199 140.07C91.123 143.032 85.2418 144.583 79.26 144.57V116.42C80.9426 116.404 82.5511 115.725 83.7362 114.531C84.9213 113.336 85.5874 111.723 85.59 110.04C85.5952 108.911 85.2946 107.802 84.72 106.83L109.23 92.6699C112.136 97.6962 113.725 103.375 113.85 109.18C113.86 109.44 113.86 109.7 113.86 110Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M79.21 114.4C78.0536 114.4 76.9447 113.94 76.1271 113.123C75.3094 112.305 74.85 111.196 74.85 110.04C74.85 108.883 75.3091 107.773 76.1265 106.953C76.9438 106.134 78.0527 105.673 79.21 105.67C80.3672 105.673 81.4762 106.134 82.2936 106.953C83.111 107.773 83.5699 108.883 83.5699 110.04C83.5699 111.196 83.1106 112.305 82.293 113.123C81.4753 113.94 80.3663 114.4 79.21 114.4ZM79.21 107.84C78.6265 107.84 78.067 108.072 77.6544 108.484C77.2418 108.897 77.01 109.456 77.01 110.04C77.0126 110.623 77.2452 111.181 77.6572 111.593C78.0692 112.005 78.6273 112.237 79.21 112.24C79.7926 112.237 80.3507 112.005 80.7627 111.593C81.1747 111.181 81.4074 110.623 81.41 110.04C81.41 109.751 81.3531 109.465 81.2426 109.198C81.132 108.931 80.9699 108.689 80.7656 108.484C80.5613 108.28 80.3188 108.118 80.0519 108.007C79.785 107.897 79.4989 107.84 79.21 107.84Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2416" },
                React.createElement("rect", { width: 200.01, height: 240.01, fill: "white", transform: "translate(0.709961)" }))));
}
exports.default = IsoIconSingleColor;
