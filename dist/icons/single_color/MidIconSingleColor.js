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
function MidIconSingleColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_2747)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M139.81 49.24C134.343 49.2347 129.101 47.0606 125.235 43.1947C121.37 39.3288 119.195 34.0871 119.19 28.62V1.85821e-06H27.0602C23.5255 -0.00131167 20.0251 0.693768 16.759 2.04553C13.493 3.3973 10.5253 5.37928 8.02539 7.87824C5.52551 10.3772 3.54243 13.3442 2.18945 16.6097C0.836474 19.8752 0.140136 23.3753 0.140137 26.91V189.13C0.150737 196.262 2.99193 203.098 8.03955 208.136C13.0872 213.174 19.9284 216.003 27.0602 216H137.66C144.797 216 151.642 213.165 156.688 208.118C161.735 203.072 164.57 196.227 164.57 189.09V49.24H139.81Z", fill: props.color || "#4690FF" })),
            React.createElement("path", { d: "M164.57 49.24H139.81C134.343 49.2347 129.101 47.0606 125.235 43.1947C121.37 39.3288 119.195 34.0871 119.19 28.62V0L164.57 49.24Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M184.09 170.6H59.0501C50.1804 170.6 42.9901 177.79 42.9901 186.66V223.94C42.9901 232.81 50.1804 240 59.0501 240H184.09C192.96 240 200.15 232.81 200.15 223.94V186.66C200.15 177.79 192.96 170.6 184.09 170.6Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M83.4801 213.37V220.64H76.0001V213.37H83.4801Z", fill: "white" }),
            React.createElement("path", { d: "M121.08 190.78V220.64H113.8V202L107.34 220.67H101L94.5001 201.96V220.67H87.2201V190.81H96.1101L104.24 211.61L112.24 190.81L121.08 190.78Z", fill: "white" }),
            React.createElement("path", { d: "M133.37 190.57V220.64H126.1V190.57H133.37Z", fill: "white" }),
            React.createElement("path", { d: "M163.54 213.39C162.288 215.664 160.397 217.52 158.1 218.73C155.516 220.053 152.642 220.709 149.74 220.64H138.39V190.57H149.74C152.645 190.492 155.524 191.134 158.12 192.44C160.41 193.623 162.297 195.461 163.54 197.72C164.842 200.117 165.497 202.812 165.44 205.54C165.494 208.277 164.84 210.981 163.54 213.39ZM155.72 211.88C156.533 211.045 157.163 210.051 157.569 208.959C157.976 207.867 158.15 206.703 158.08 205.54C158.149 204.377 157.975 203.213 157.568 202.121C157.162 201.029 156.532 200.035 155.72 199.2C153.894 197.61 151.517 196.802 149.1 196.95H145.66V214.13H149.1C151.517 214.278 153.894 213.47 155.72 211.88Z", fill: "white" }),
            React.createElement("path", { d: "M120.37 131.92H109.42V87.6601C109.42 86.1775 108.831 84.7557 107.783 83.7074C106.735 82.659 105.313 82.0701 103.83 82.0701H75.8301C74.3466 82.0701 72.9238 82.6587 71.8739 83.7068C70.824 84.7548 70.2328 86.1766 70.2301 87.6601V131.92H59.2301V83.9201C59.2328 80.5191 60.5857 77.2583 62.9915 74.8544C65.3973 72.4504 68.6592 71.1001 72.0602 71.1001H107.47C110.87 71.1001 114.131 72.4508 116.535 74.855C118.939 77.2592 120.29 80.52 120.29 83.9201L120.37 131.92Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M107.39 144.9C114.559 144.9 120.37 139.089 120.37 131.92C120.37 124.751 114.559 118.94 107.39 118.94C100.221 118.94 94.41 124.751 94.41 131.92C94.41 139.089 100.221 144.9 107.39 144.9Z", fill: props.color || "#4690FF" }),
            React.createElement("path", { d: "M57.3202 144.9C64.4888 144.9 70.3002 139.089 70.3002 131.92C70.3002 124.751 64.4888 118.94 57.3202 118.94C50.1515 118.94 44.3402 124.751 44.3402 131.92C44.3402 139.089 50.1515 144.9 57.3202 144.9Z", fill: props.color || "#4690FF" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_2747" },
                React.createElement("rect", { width: 200.01, height: 240, fill: "white", transform: "translate(0.140137)" }))));
}
exports.default = MidIconSingleColor;
