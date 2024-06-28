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
function PngIconColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 200 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_564)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140.24 49.24C134.773 49.2347 129.531 47.0606 125.665 43.1947C121.799 39.3288 119.625 34.0871 119.62 28.62V0H27.48C20.343 0 13.4984 2.83517 8.45178 7.88177C3.40518 12.9284 0.570007 19.773 0.570007 26.91V189.13C0.580606 196.26 3.42043 203.094 8.46588 208.132C13.5113 213.17 20.3499 216 27.48 216H138.09C145.222 216 152.062 213.169 157.108 208.129C162.153 203.089 164.992 196.252 165 189.12V49.24H140.24Z", fill: "#005FAD" })),
            React.createElement("path", { d: "M165 49.24H140.24C134.773 49.2347 129.531 47.0606 125.665 43.1947C121.799 39.3288 119.625 34.0871 119.62 28.62V0L165 49.24Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M184.51 170.6H59.47C50.6003 170.6 43.41 177.79 43.41 186.66V223.94C43.41 232.81 50.6003 240 59.47 240H184.51C193.38 240 200.57 232.81 200.57 223.94V186.66C200.57 177.79 193.38 170.6 184.51 170.6Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M79.63 213.37V220.64H72.1V213.37H79.63Z", fill: "white" }),
            React.createElement("path", { d: "M90.69 210.1V220.64H83.41V190.57H95.19C98.77 190.57 101.493 191.457 103.36 193.23C104.308 194.159 105.048 195.279 105.532 196.514C106.016 197.75 106.234 199.074 106.17 200.4C106.201 202.149 105.766 203.875 104.91 205.4C104.042 206.893 102.746 208.091 101.19 208.84C99.3191 209.732 97.2619 210.164 95.19 210.1H90.69ZM98.77 200.4C98.77 197.733 97.31 196.4 94.39 196.4H90.69V204.23H94.39C97.31 204.257 98.77 202.98 98.77 200.4Z", fill: "white" }),
            React.createElement("path", { d: "M136.45 220.64H129.18L117 202.18V220.64H109.73V190.57H117L129.17 209.2V190.57H136.44L136.45 220.64Z", fill: "white" }),
            React.createElement("path", { d: "M164.86 193C167.287 194.816 168.917 197.5 169.41 200.49H161.71C161.205 199.419 160.394 198.521 159.38 197.91C158.234 197.231 156.922 196.884 155.59 196.91C154.555 196.867 153.524 197.052 152.569 197.451C151.613 197.85 150.757 198.454 150.06 199.22C148.599 200.976 147.856 203.219 147.98 205.5C147.98 208.36 148.71 210.557 150.17 212.09C150.991 212.887 151.969 213.503 153.042 213.899C154.115 214.295 155.259 214.462 156.4 214.39C158.031 214.418 159.628 213.916 160.95 212.96C162.297 211.952 163.268 210.523 163.71 208.9H154.53V203.67H169.8V211C169.209 212.788 168.282 214.448 167.07 215.89C165.761 217.442 164.13 218.691 162.29 219.55C160.204 220.513 157.927 220.992 155.63 220.95C152.839 221.021 150.079 220.351 147.63 219.01C145.389 217.754 143.564 215.87 142.38 213.59C141.112 211.135 140.477 208.403 140.53 205.64C140.47 202.861 141.106 200.111 142.38 197.64C143.563 195.366 145.379 193.483 147.61 192.22C150.023 190.891 152.746 190.225 155.5 190.29C158.835 190.126 162.128 191.08 164.86 193Z", fill: "white" }),
            React.createElement("path", { d: "M55.27 66.72H41.52V80.47H55.27V66.72Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M69.03 80.47H55.28V94.22H69.03V80.47Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M82.78 66.72H69.03V80.47H82.78V66.72Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M96.5301 80.47H82.78V94.22H96.5301V80.47Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M110.3 66.72H96.55V80.47H110.3V66.72Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M124.05 80.47H110.3V94.22H124.05V80.47Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M55.27 94.2H41.52V107.95H55.27V94.2Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M69.03 107.95H55.28V121.7H69.03V107.95Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M82.78 94.2H69.03V107.95H82.78V94.2Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M96.5301 107.95H82.78V121.7H96.5301V107.95Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M110.3 94.2H96.55V107.95H110.3V94.2Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M124.05 107.95H110.3V121.7H124.05V107.95Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M55.27 121.81H41.52V135.56H55.27V121.81Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M69.03 135.56H55.28V149.31H69.03V135.56Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M82.78 121.81H69.03V135.56H82.78V121.81Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M96.5301 135.56H82.78V149.31H96.5301V135.56Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M110.3 121.81H96.55V135.56H110.3V121.81Z", fill: "#005FAD" }),
            React.createElement("path", { d: "M124.05 135.56H110.3V149.31H124.05V135.56Z", fill: "#005FAD" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_564" },
                React.createElement("rect", { width: "1em", height: "1em", fill: "white", transform: "translate(0.570007)" }))));
}
exports.default = PngIconColor;
