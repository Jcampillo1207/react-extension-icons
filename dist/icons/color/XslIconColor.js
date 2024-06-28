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
function XslIconColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_535)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140.1 49.25C134.633 49.2447 129.391 47.0704 125.525 43.2046C121.66 39.3387 119.485 34.097 119.48 28.6299V0H27.3401C20.2031 0 13.3584 2.83523 8.31177 7.88184C3.26516 12.9284 0.429932 19.7729 0.429932 26.9099V189.13C0.429932 196.267 3.26516 203.112 8.31177 208.158C13.3584 213.205 20.2031 216.04 27.3401 216.04H137.94C145.077 216.04 151.922 213.205 156.968 208.158C162.015 203.112 164.85 196.267 164.85 189.13V49.25H140.1Z", fill: "#00C650" })),
            React.createElement("path", { d: "M164.85 49.25H140.1C134.633 49.2447 129.391 47.0704 125.525 43.2046C121.66 39.3387 119.485 34.097 119.48 28.6299V0L164.85 49.25Z", fill: "#00C650" }),
            React.createElement("path", { d: "M184.37 170.61H59.3301C50.4604 170.61 43.27 177.8 43.27 186.67V223.95C43.27 232.82 50.4604 240.01 59.3301 240.01H184.37C193.24 240.01 200.43 232.82 200.43 223.95V186.67C200.43 177.8 193.24 170.61 184.37 170.61Z", fill: "#00C650" }),
            React.createElement("path", { d: "M87.8601 213.38V220.65H80.3301V213.38H87.8601Z", fill: "white" }),
            React.createElement("path", { d: "M109.89 220.65L103.56 211.29L98.1101 220.65H89.78L99.3899 205.17L89.48 190.58H98.1101L104.28 199.64L109.6 190.58H117.89L108.41 205.72L118.53 220.65H109.89Z", fill: "white" }),
            React.createElement("path", { d: "M141.73 216.57C140.867 217.951 139.629 219.057 138.16 219.76C136.372 220.597 134.413 221.005 132.44 220.95C129.463 221.075 126.529 220.206 124.1 218.48C123.026 217.673 122.147 216.635 121.529 215.443C120.911 214.25 120.569 212.933 120.53 211.59H128.27C128.325 212.603 128.757 213.559 129.48 214.27C130.2 214.941 131.156 215.301 132.14 215.27C132.541 215.293 132.943 215.238 133.322 215.105C133.701 214.973 134.051 214.767 134.35 214.5C134.617 214.241 134.827 213.93 134.966 213.585C135.106 213.241 135.172 212.871 135.16 212.5C135.17 212.147 135.109 211.797 134.98 211.468C134.851 211.14 134.657 210.842 134.41 210.59C133.881 210.054 133.252 209.626 132.56 209.33C131.833 209.01 130.813 208.62 129.5 208.16C127.906 207.634 126.35 207.003 124.84 206.27C123.6 205.631 122.535 204.697 121.74 203.55C120.817 202.162 120.362 200.515 120.44 198.85C120.404 197.2 120.879 195.579 121.8 194.21C122.746 192.872 124.054 191.831 125.57 191.21C127.318 190.499 129.194 190.159 131.08 190.21C133.944 190.052 136.773 190.897 139.08 192.6C140.062 193.399 140.867 194.394 141.442 195.522C142.017 196.65 142.35 197.886 142.42 199.15H134.55C134.462 198.265 134.082 197.435 133.47 196.79C133.157 196.49 132.787 196.258 132.381 196.106C131.975 195.955 131.543 195.888 131.11 195.91C130.36 195.876 129.624 196.118 129.04 196.59C128.771 196.845 128.561 197.157 128.426 197.503C128.291 197.848 128.235 198.22 128.26 198.59C128.245 199.262 128.496 199.913 128.96 200.4C129.458 200.919 130.057 201.332 130.72 201.61C131.43 201.92 132.45 202.32 133.78 202.8C135.403 203.329 136.984 203.977 138.51 204.74C139.757 205.412 140.831 206.364 141.65 207.52C142.583 208.93 143.045 210.6 142.97 212.29C142.957 213.803 142.528 215.284 141.73 216.57Z", fill: "white" }),
            React.createElement("path", { d: "M154.26 215.08H164V220.65H147V190.58H154.28L154.26 215.08Z", fill: "white" }),
            React.createElement("path", { d: "M119.32 150.84H46C39.65 150.84 34.48 144.52 34.48 136.74V83.55C34.48 75.78 39.65 69.46 46 69.46H119.35C125.69 69.46 130.86 75.78 130.86 83.55V136.74C130.83 144.52 125.66 150.84 119.32 150.84ZM46 76.6599C42.89 76.6599 40.3701 79.75 40.3701 83.55V136.74C40.3701 140.54 42.89 143.63 46 143.63H119.35C122.45 143.63 124.97 140.54 124.97 136.74V83.55C124.97 79.75 122.45 76.6599 119.35 76.6599H46Z", fill: "#00C650" }),
            React.createElement("path", { d: "M127.89 118.81H37.3999V126.02H127.89V118.81Z", fill: "#00C650" }),
            React.createElement("path", { d: "M127.89 94.09H37.3999V101.3H127.89V94.09Z", fill: "#00C650" }),
            React.createElement("path", { d: "M104.71 73.06H97.5V147.23H104.71V73.06Z", fill: "#00C650" }),
            React.createElement("path", { d: "M67.78 73.06H60.5701V147.23H67.78V73.06Z", fill: "#00C650" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_535" },
                React.createElement("rect", { width: 200, height: 240.01, fill: "white", transform: "translate(0.429932)" }))));
}
exports.default = XslIconColor;
