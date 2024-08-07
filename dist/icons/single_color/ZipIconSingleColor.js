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
function ZipIconSingleColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 201 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: props.color || "#4690FF", d: "M140.24 49.25C134.772 49.2421 129.53 47.0657 125.664 43.1982C121.799 39.3308 119.625 34.0881 119.62 28.62V0H27.4798C20.3428 0 13.4982 2.83511 8.4516 7.88171C3.40499 12.9283 0.569824 19.7731 0.569824 26.91V189.13C0.580423 196.26 3.42024 203.094 8.4657 208.132C13.5112 213.17 20.3497 216 27.4798 216H138.09C145.22 216 152.058 213.17 157.104 208.132C162.149 203.094 164.989 196.26 165 189.13V49.25H140.24Z", opacity: 0.3 }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M165 49.25H140.24C134.772 49.2421 129.53 47.0657 125.664 43.1982 121.799 39.3308 119.625 34.0881 119.62 28.62V0L165 49.25ZM184.51 170.61H59.4698C50.6002 170.61 43.4099 177.8 43.4099 186.67V223.95C43.4099 232.82 50.6002 240.01 59.4698 240.01H184.51C193.38 240.01 200.57 232.82 200.57 223.95V186.67C200.57 177.8 193.38 170.61 184.51 170.61Z" }),
            React.createElement("path", { fill: "#fff", d: "M92.9198 213.38V220.65H85.3898V213.38H92.9198ZM104.23 214.78H117.5V220.65H96.1498V215.12L109.21 196.41H96.3198V190.58H117.42V196.11L104.23 214.78ZM129.24 190.58V220.65H122V190.58H129.24ZM141.53 210.1V220.65H134.26V190.58H146C149.57 190.58 152.3 191.46 154.17 193.24 155.117 194.168 155.856 195.286 156.341 196.52 156.825 197.754 157.043 199.076 156.98 200.4 157.011 202.149 156.576 203.875 155.72 205.4 154.847 206.892 153.553 208.092 152 208.85 150.125 209.731 148.07 210.16 146 210.1H141.53ZM149.61 200.4C149.61 197.767 148.15 196.433 145.23 196.4H141.53V204.22H145.23C148.15 204.253 149.61 202.98 149.61 200.4Z" }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M82.7698 152.52C79.4068 152.515 76.1831 151.176 73.806 148.797C71.4289 146.418 70.0925 143.193 70.0898 139.83V127.14H95.4598V139.83C95.4572 143.195 94.1193 146.421 91.7401 148.8C89.3608 151.18 86.1346 152.517 82.7698 152.52ZM76.5798 133.63V139.83C76.5798 141.473 77.2316 143.048 78.3922 144.211C79.5528 145.373 81.1272 146.028 82.7698 146.03C84.4134 146.028 85.9888 145.373 87.1509 144.211C88.3131 143.049 88.9671 141.474 88.9698 139.83V133.63H76.5798Z" }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M70.0798 127.15H82.7998V114.43H70.0798V127.15Z" }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M82.7698 114.44H95.4898V101.72H82.7698V114.44Z" }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M70.0798 101.73H82.7998V89.01H70.0798V101.73Z" }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M82.7698 89.02H95.4898V76.3H82.7698V89.02Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240.01H0z", transform: "translate(.57)" }))));
}
exports.default = ZipIconSingleColor;
