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
function MidIconColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 201 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: "#005FAD", d: "M139.81 49.24C134.343 49.2347 129.101 47.0606 125.235 43.1947C121.369 39.3288 119.195 34.0871 119.19 28.62V1.85821e-06H27.0601C23.5253 -0.00131167 20.0249 0.693768 16.7589 2.04553C13.4929 3.3973 10.5252 5.37928 8.02527 7.87824C5.52538 10.3772 3.54231 13.3442 2.18933 16.6097C0.836352 19.8752 0.140014 23.3753 0.140015 26.91V189.13C0.150615 196.262 2.99181 203.098 8.03943 208.136C13.087 213.174 19.9283 216.003 27.0601 216H137.66C144.797 216 151.642 213.165 156.688 208.118C161.735 203.072 164.57 196.227 164.57 189.09V49.24H139.81Z", opacity: 0.3 }),
            React.createElement("path", { fill: "#005FAD", d: "M164.57 49.24H139.81C134.343 49.2347 129.101 47.0606 125.235 43.1947 121.369 39.3288 119.195 34.0871 119.19 28.62V0L164.57 49.24ZM184.09 170.6H59.05C50.1803 170.6 42.99 177.79 42.99 186.66V223.94C42.99 232.81 50.1803 240 59.05 240H184.09C192.96 240 200.15 232.81 200.15 223.94V186.66C200.15 177.79 192.96 170.6 184.09 170.6Z" }),
            React.createElement("path", { fill: "#fff", d: "M83.48 213.37V220.64H76V213.37H83.48ZM121.08 190.78V220.64H113.8V202L107.34 220.67H101L94.5 201.96V220.67H87.22V190.81H96.11L104.24 211.61 112.24 190.81 121.08 190.78ZM133.37 190.57V220.64H126.1V190.57H133.37ZM163.54 213.39C162.288 215.664 160.397 217.52 158.1 218.73 155.516 220.053 152.642 220.71 149.74 220.64H138.39V190.57H149.74C152.645 190.492 155.524 191.134 158.12 192.44 160.41 193.624 162.297 195.462 163.54 197.72 164.842 200.117 165.497 202.813 165.44 205.54 165.494 208.277 164.84 210.981 163.54 213.39ZM155.72 211.88C156.533 211.046 157.163 210.051 157.569 208.959 157.975 207.867 158.149 206.703 158.08 205.54 158.149 204.377 157.975 203.213 157.568 202.121 157.162 201.03 156.532 200.035 155.72 199.2 153.894 197.61 151.516 196.802 149.1 196.95H145.66V214.13H149.1C151.516 214.278 153.894 213.47 155.72 211.88Z" }),
            React.createElement("path", { fill: "#005FAD", d: "M120.37 131.92H109.42V87.6601C109.42 86.1775 108.831 84.7557 107.783 83.7074C106.734 82.659 105.313 82.0701 103.83 82.0701H75.83C74.3465 82.0701 72.9237 82.6587 71.8738 83.7068C70.8239 84.7548 70.2326 86.1766 70.23 87.6601V131.92H59.23V83.9201C59.2326 80.5191 60.5855 77.2583 62.9913 74.8544C65.3971 72.4504 68.6591 71.1001 72.0601 71.1001H107.47C110.87 71.1001 114.131 72.4508 116.535 74.855C118.939 77.2592 120.29 80.52 120.29 83.9201L120.37 131.92Z" }),
            React.createElement("path", { fill: "#005FAD", d: "M107.39 144.9C114.559 144.9 120.37 139.089 120.37 131.92 120.37 124.751 114.559 118.94 107.39 118.94 100.221 118.94 94.4099 124.751 94.4099 131.92 94.4099 139.089 100.221 144.9 107.39 144.9ZM57.3201 144.9C64.4887 144.9 70.3 139.089 70.3 131.92 70.3 124.751 64.4887 118.94 57.3201 118.94 50.1514 118.94 44.3401 124.751 44.3401 131.92 44.3401 139.089 50.1514 144.9 57.3201 144.9Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200.01V240H0z", transform: "translate(.14)" }))));
}
exports.default = MidIconColor;
