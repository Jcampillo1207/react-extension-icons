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
function AviIconColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_567)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140 49.24C134.532 49.2347 129.289 47.0609 125.422 43.1953C121.554 39.3297 119.378 34.0881 119.37 28.62V0H27.2C20.063 0 13.2184 2.83517 8.17175 7.88177C3.12515 12.9284 0.290039 19.773 0.290039 26.91V189.13C0.297991 196.261 3.13695 203.097 8.18298 208.135C13.229 213.174 20.0691 216.003 27.2 216H137.8C144.937 216 151.782 213.165 156.828 208.118C161.875 203.072 164.71 196.227 164.71 189.09V49.24H140Z", fill: "#FF9908" })),
            React.createElement("path", { d: "M164.71 49.24H140C134.532 49.2347 129.289 47.0609 125.422 43.1953C121.554 39.3297 119.378 34.0881 119.37 28.62V0L164.71 49.24Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M184.23 170.6H59.1899C50.3202 170.6 43.13 177.79 43.13 186.66V223.94C43.13 232.81 50.3202 240 59.1899 240H184.23C193.1 240 200.29 232.81 200.29 223.94V186.66C200.29 177.79 193.1 170.6 184.23 170.6Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M88 213.37V220.64H80.47V213.37H88Z", fill: "white" }),
            React.createElement("path", { d: "M110.45 215.16H99.17L97.3 220.64H89.65L100.65 190.79H109L120 220.64H112.26L110.45 215.16ZM108.57 209.63L104.83 198.57L101.05 209.63H108.57Z", fill: "white" }),
            React.createElement("path", { d: "M128.48 190.57L135.84 213.2L143.2 190.57H151L140.54 220.64H131.14L120.72 190.57H128.48Z", fill: "white" }),
            React.createElement("path", { d: "M161.06 190.57V220.64H153.79V190.57H161.06Z", fill: "white" }),
            React.createElement("path", { d: "M82.34 149.83C71.4304 149.817 60.9715 145.477 53.2572 137.763C45.5429 130.049 41.2032 119.59 41.1899 108.68C41.2032 97.7704 45.5429 87.3114 53.2572 79.5972C60.9715 71.8829 71.4304 67.5433 82.34 67.53C93.2496 67.5433 103.709 71.8829 111.423 79.5972C119.137 87.3114 123.477 97.7704 123.49 108.68C123.477 119.59 119.137 130.049 111.423 137.763C103.709 145.477 93.2496 149.817 82.34 149.83ZM82.34 74.74C73.3434 74.7559 64.7198 78.3368 58.3583 84.6983C51.9967 91.0599 48.4159 99.6834 48.4 108.68C48.4 117.687 51.9739 126.326 58.3372 132.7C64.7004 139.075 73.333 142.664 82.34 142.68C91.3469 142.664 99.9796 139.075 106.343 132.7C112.706 126.326 116.28 117.687 116.28 108.68C116.264 99.6834 112.683 91.0599 106.322 84.6983C99.9601 78.3368 91.3365 74.7559 82.34 74.74Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M94.14 105.86L84.5699 100.34C84.0746 100.054 83.5128 99.9035 82.9408 99.9033C82.3688 99.9032 81.8069 100.053 81.3114 100.339C80.8159 100.625 80.4043 101.036 80.1179 101.531C79.8316 102.026 79.6806 102.588 79.6801 103.16V114.21C79.6806 114.782 79.8316 115.344 80.1179 115.839C80.4043 116.334 80.8159 116.745 81.3114 117.031C81.8069 117.317 82.3688 117.467 82.9408 117.467C83.5128 117.467 84.0746 117.316 84.5699 117.03L94.14 111.5C94.6341 111.214 95.0441 110.802 95.3292 110.307C95.6143 109.812 95.7644 109.251 95.7644 108.68C95.7644 108.109 95.6143 107.548 95.3292 107.053C95.0441 106.558 94.6341 106.147 94.14 105.86Z", fill: "#FF9908" }),
            React.createElement("path", { d: "M74.77 99.48H71.27C69.9666 99.48 68.91 100.537 68.91 101.84V115.53C68.91 116.833 69.9666 117.89 71.27 117.89H74.77C76.0734 117.89 77.13 116.833 77.13 115.53V101.84C77.13 100.537 76.0734 99.48 74.77 99.48Z", fill: "#FF9908" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_567" },
                React.createElement("rect", { width: 200, height: 240, fill: "white", transform: "translate(0.290039)" }))));
}
exports.default = AviIconColor;
