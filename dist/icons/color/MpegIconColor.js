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
function MpegIconColor(props) {
    return React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 201 240", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#clip0_2_568)" },
            React.createElement("g", { opacity: 0.3 },
                React.createElement("path", { opacity: 0.3, d: "M140.53 49.24C135.062 49.2347 129.819 47.0609 125.952 43.1953C122.084 39.3297 119.908 34.0881 119.9 28.62V0H27.77C20.633 0 13.7883 2.83517 8.7417 7.88177C3.6951 12.9284 0.860107 19.773 0.860107 26.91V189.13C0.870706 196.26 3.7104 203.094 8.75586 208.132C13.8013 213.17 20.64 216 27.77 216H138.37C145.507 216 152.352 213.165 157.398 208.118C162.445 203.072 165.28 196.227 165.28 189.09V49.24H140.53Z", fill: "#00C650" })),
            React.createElement("path", { d: "M165.28 49.24H140.53C135.062 49.2347 129.819 47.0609 125.952 43.1953C122.084 39.3297 119.908 34.0881 119.9 28.62V0L165.28 49.24Z", fill: "#00C650" }),
            React.createElement("path", { d: "M184.8 170.6H59.76C50.8903 170.6 43.7 177.79 43.7 186.66V223.94C43.7 232.81 50.8903 240 59.76 240H184.8C193.67 240 200.86 232.81 200.86 223.94V186.66C200.86 177.79 193.67 170.6 184.8 170.6Z", fill: "#00C650" }),
            React.createElement("path", { d: "M65.9199 213.37V220.64H58.3899V213.37H65.9199Z", fill: "white" }),
            React.createElement("path", { d: "M103.52 190.79V220.64H96.24V202L89.78 220.67H83.48L76.98 201.96V220.67H69.7V190.82H78.5901L86.72 211.61L94.72 190.82L103.52 190.79Z", fill: "white" }),
            React.createElement("path", { d: "M115.81 210.1V220.64H108.54V190.57H120.32C123.887 190.57 126.607 191.457 128.48 193.23C129.43 194.158 130.171 195.277 130.656 196.513C131.14 197.749 131.356 199.074 131.29 200.4C131.317 202.147 130.886 203.871 130.04 205.4C129.166 206.889 127.872 208.085 126.32 208.84C124.448 209.729 122.392 210.161 120.32 210.1H115.81ZM123.89 200.4C123.89 197.733 122.43 196.4 119.51 196.4H115.81V204.23H119.51C122.43 204.257 123.89 202.98 123.89 200.4Z", fill: "white" }),
            React.createElement("path", { d: "M142.14 196.36V202.65H152.3V208.14H142.14V214.82H153.58V220.64H134.86V190.57H153.58V196.36H142.14Z", fill: "white" }),
            React.createElement("path", { d: "M181.1 193C183.523 194.819 185.153 197.501 185.65 200.49H178C177.495 199.415 176.68 198.517 175.66 197.91C174.515 197.229 173.202 196.883 171.87 196.91C170.836 196.869 169.805 197.054 168.849 197.453C167.894 197.852 167.038 198.455 166.34 199.22C164.883 200.978 164.141 203.22 164.26 205.5C164.26 208.36 164.99 210.557 166.45 212.09C167.271 212.886 168.249 213.502 169.322 213.898C170.395 214.294 171.538 214.462 172.68 214.39C174.311 214.42 175.909 213.918 177.23 212.96C178.561 211.978 179.534 210.587 180 209H170.81V203.77H186V211C185.412 212.788 184.489 214.448 183.28 215.89C181.964 217.439 180.331 218.688 178.49 219.55C176.407 220.512 174.134 220.991 171.84 220.95C169.049 221.02 166.289 220.351 163.84 219.01C161.599 217.754 159.774 215.87 158.59 213.59C157.327 211.133 156.691 208.402 156.74 205.64C156.685 202.861 157.32 200.112 158.59 197.64C159.776 195.368 161.592 193.486 163.82 192.22C166.234 190.893 168.956 190.227 171.71 190.29C175.054 190.124 178.358 191.078 181.1 193Z", fill: "white" }),
            React.createElement("path", { d: "M120.3 131.91V84.2C120.297 83.9684 120.274 83.7374 120.23 83.51C120.236 83.4435 120.236 83.3765 120.23 83.31C120.23 83.15 120.14 83 120.09 82.85L120 82.65C119.935 82.5037 119.858 82.3632 119.77 82.23L119.68 82.07C119.551 81.8912 119.411 81.7209 119.26 81.56L119.19 81.5C119.054 81.3717 118.91 81.2516 118.76 81.14L118.58 81.03C118.45 80.95 118.31 80.88 118.17 80.81L117.97 80.72C117.81 80.6595 117.646 80.6095 117.48 80.57H117.32C117.097 80.5215 116.868 80.498 116.64 80.5H49.2799C48.3542 80.5847 47.4935 81.0121 46.8664 81.6984C46.2393 82.3846 45.8909 83.2804 45.8898 84.21C45.8898 84.27 45.8898 84.32 45.8898 84.38V132.06C45.87 132.673 46.0645 133.274 46.4399 133.76C46.7703 134.314 47.2388 134.773 47.7997 135.092C48.3606 135.411 48.9946 135.579 49.6398 135.58H116.64C117.606 135.56 118.526 135.166 119.209 134.482C119.891 133.798 120.282 132.876 120.3 131.91ZM49.81 89.48V82.24H55.6999V89.48H49.81ZM59.7499 89.48V82.24H65.6398V89.48H59.7499ZM69.6899 89.48V82.24H75.58V89.48H69.6899ZM79.6298 89.48V82.24H85.5199V89.48H79.6298ZM89.57 89.48V82.24H95.4599V89.48H89.57ZM99.5099 89.48V82.24H105.4V89.48H99.5099ZM109.45 89.48V82.24H115.34V89.48H109.45ZM48.4499 124.59V91.44H117.67V124.59H48.4499ZM49.8 133.78V126.54H55.6899V133.78H49.8ZM59.7399 133.78V126.54H65.6298V133.78H59.7399ZM69.6798 133.78V126.54H75.57V133.78H69.6798ZM79.62 133.78V126.54H85.5099V133.78H79.62ZM89.56 133.78V126.54H95.4499V133.78H89.56ZM99.4999 133.78V126.54H105.39V133.78H99.4999ZM109.44 133.78V126.54H115.33V133.78H109.44Z", fill: "#00C650" }),
            React.createElement("path", { d: "M91.0801 105.56L81.51 100.03C81.0147 99.744 80.4528 99.5934 79.8809 99.5933C79.3089 99.5931 78.747 99.7434 78.2515 100.029C77.756 100.315 77.3442 100.726 77.0579 101.221C76.7715 101.716 76.6207 102.278 76.6201 102.85V113.91C76.6207 114.482 76.7715 115.044 77.0579 115.539C77.3442 116.034 77.756 116.445 78.2515 116.731C78.747 117.017 79.3089 117.167 79.8809 117.167C80.4528 117.167 81.0147 117.016 81.51 116.73L91.0801 111.2C91.5741 110.913 91.9842 110.502 92.2693 110.007C92.5544 109.512 92.7043 108.951 92.7043 108.38C92.7043 107.809 92.5544 107.248 92.2693 106.753C91.9842 106.258 91.5741 105.847 91.0801 105.56Z", fill: "#00C650" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2_568" },
                React.createElement("rect", { width: 20, height: 24, fill: "white", transform: "translate(0.860107)" }))));
}
exports.default = MpegIconColor;
