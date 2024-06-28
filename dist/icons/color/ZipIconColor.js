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
function ZipIconColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 201 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: "#FF3E4C", d: "M140.24 49.25C134.772 49.2421 129.53 47.0657 125.665 43.1982C121.799 39.3308 119.625 34.0881 119.62 28.62V0H27.48C20.343 0 13.4984 2.83511 8.45178 7.88171C3.40518 12.9283 0.570007 19.7731 0.570007 26.91V189.13C0.580606 196.26 3.42043 203.094 8.46588 208.132C13.5113 213.17 20.3499 216 27.48 216H138.09C145.22 216 152.059 213.17 157.104 208.132C162.15 203.094 164.989 196.26 165 189.13V49.25H140.24Z", opacity: 0.3 }),
            React.createElement("path", { fill: "#FF3E4C", d: "M165 49.25H140.24C134.772 49.2421 129.53 47.0657 125.665 43.1982 121.799 39.3308 119.625 34.0881 119.62 28.62V0L165 49.25ZM184.51 170.61H59.47C50.6003 170.61 43.41 177.8 43.41 186.67V223.95C43.41 232.82 50.6003 240.01 59.47 240.01H184.51C193.38 240.01 200.57 232.82 200.57 223.95V186.67C200.57 177.8 193.38 170.61 184.51 170.61Z" }),
            React.createElement("path", { fill: "#fff", d: "M92.92 213.38V220.65H85.39V213.38H92.92ZM104.23 214.78H117.5V220.65H96.15V215.12L109.21 196.41H96.32V190.58H117.42V196.11L104.23 214.78ZM129.24 190.58V220.65H122V190.58H129.24ZM141.53 210.1V220.65H134.26V190.58H146C149.57 190.58 152.3 191.46 154.17 193.24 155.117 194.168 155.857 195.285 156.341 196.519 156.825 197.753 157.043 199.076 156.98 200.4 157.011 202.149 156.576 203.875 155.72 205.4 154.847 206.891 153.553 208.092 152 208.85 150.126 209.731 148.07 210.159 146 210.1H141.53ZM149.61 200.4C149.61 197.767 148.15 196.433 145.23 196.4H141.53V204.22H145.23C148.15 204.253 149.61 202.98 149.61 200.4Z" }),
            React.createElement("path", { fill: "#FF3E4C", d: "M82.77 152.52C79.407 152.515 76.1833 151.176 73.8062 148.797C71.4291 146.418 70.0927 143.193 70.09 139.83V127.14H95.46V139.83C95.4574 143.195 94.1195 146.421 91.7402 148.8C89.361 151.18 86.1348 152.517 82.77 152.52ZM76.58 133.63V139.83C76.58 141.473 77.2318 143.048 78.3924 144.211C79.553 145.373 81.1274 146.027 82.77 146.03C84.4135 146.027 85.989 145.373 87.1511 144.211C88.3133 143.049 88.9673 141.473 88.97 139.83V133.63H76.58Z" }),
            React.createElement("path", { fill: "#FF3E4C", d: "M70.08 127.15H82.8V114.43H70.08V127.15Z" }),
            React.createElement("path", { fill: "#FF3E4C", d: "M82.77 114.44H95.49V101.72H82.77V114.44Z" }),
            React.createElement("path", { fill: "#FF3E4C", d: "M70.08 101.73H82.8V89.01H70.08V101.73Z" }),
            React.createElement("path", { fill: "#FF3E4C", d: "M82.77 89.02H95.49V76.3H82.77V89.02Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240.01H0z", transform: "translate(.57)" }))));
}
exports.default = ZipIconColor;
