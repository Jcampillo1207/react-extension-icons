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
function PdfIconGrayscale(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 201 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: "#5B5B5B", d: "M140.24 49.25C134.773 49.2447 129.531 47.0704 125.665 43.2046C121.799 39.3387 119.625 34.097 119.62 28.6299V0H27.4798C20.3428 0 13.4982 2.83523 8.4516 7.88184C3.40499 12.9284 0.569824 19.7729 0.569824 26.9099V189.13C0.580423 196.26 3.42024 203.094 8.4657 208.132C13.5112 213.17 20.3497 216 27.4798 216H138.09C145.22 216 152.058 213.17 157.104 208.132C162.149 203.094 164.989 196.26 165 189.13V49.25H140.24Z", opacity: 0.3 }),
            React.createElement("path", { fill: "#5B5B5B", d: "M165 49.25H140.24C134.773 49.2447 129.531 47.0704 125.665 43.2046 121.799 39.3387 119.625 34.097 119.62 28.6299V0L165 49.25ZM131.17 150.84H27.9298C26.9352 150.84 25.9814 150.445 25.2781 149.742 24.5749 149.038 24.1798 148.085 24.1798 147.09 24.1825 146.097 24.5787 145.146 25.2817 144.445 25.9847 143.744 26.937 143.35 27.9298 143.35H131.17C132.162 143.35 133.113 143.744 133.814 144.445 134.516 145.147 134.91 146.098 134.91 147.09 134.911 147.582 134.815 148.07 134.628 148.524 134.441 148.979 134.165 149.393 133.818 149.741 133.471 150.089 133.058 150.366 132.603 150.554 132.149 150.743 131.662 150.84 131.17 150.84ZM131.17 108.6H27.9298C26.937 108.6 25.9847 108.206 25.2817 107.505 24.5787 106.804 24.1825 105.853 24.1798 104.86 24.1798 103.866 24.5749 102.912 25.2781 102.208 25.9814 101.505 26.9352 101.11 27.9298 101.11H131.17C131.662 101.11 132.149 101.207 132.603 101.396 133.058 101.585 133.471 101.861 133.818 102.209 134.165 102.558 134.441 102.971 134.628 103.426 134.815 103.881 134.911 104.368 134.91 104.86 134.91 105.852 134.516 106.803 133.814 107.505 133.113 108.206 132.162 108.6 131.17 108.6ZM131.17 129.72H27.9298C26.9352 129.72 25.9814 129.325 25.2781 128.622 24.5749 127.918 24.1798 126.965 24.1798 125.97 24.1825 124.977 24.5787 124.026 25.2817 123.325 25.9847 122.624 26.937 122.23 27.9298 122.23H131.17C132.162 122.23 133.113 122.624 133.814 123.325 134.516 124.027 134.91 124.978 134.91 125.97 134.911 126.462 134.815 126.949 134.628 127.404 134.441 127.859 134.165 128.273 133.818 128.621 133.471 128.969 133.058 129.246 132.603 129.434 132.149 129.623 131.662 129.72 131.17 129.72ZM90.4498 87.4802H27.9298C26.937 87.4802 25.9847 87.0866 25.2817 86.3855 24.5787 85.6844 24.1825 84.7331 24.1798 83.7402 24.1798 82.7457 24.5749 81.7919 25.2781 81.0886 25.9814 80.3854 26.9352 79.9902 27.9298 79.9902H90.4498C91.4427 79.9929 92.3939 80.3891 93.095 81.092 93.7961 81.795 94.1898 82.7474 94.1898 83.7402 94.1872 84.7313 93.7923 85.681 93.0915 86.3818 92.3907 87.0827 91.4409 87.4776 90.4498 87.4802ZM90.4498 66.3601H27.9298C26.937 66.3601 25.9847 65.9662 25.2817 65.2651 24.5787 64.564 24.1825 63.6129 24.1798 62.6201 24.1798 61.6256 24.5749 60.6715 25.2781 59.9683 25.9814 59.265 26.9352 58.8701 27.9298 58.8701H90.4498C91.4427 58.8728 92.3939 59.2689 93.095 59.9719 93.7961 60.6749 94.1898 61.6273 94.1898 62.6201 94.1872 63.6112 93.7923 64.5609 93.0915 65.2617 92.3907 65.9625 91.4409 66.3575 90.4498 66.3601ZM184.51 170.61H59.4698C50.6002 170.61 43.4099 177.8 43.4099 186.67V223.95C43.4099 232.82 50.6002 240.01 59.4698 240.01H184.51C193.38 240.01 200.57 232.82 200.57 223.95V186.67C200.57 177.8 193.38 170.61 184.51 170.61Z" }),
            React.createElement("path", { fill: "#fff", d: "M84.4298 213.38V220.65H76.9098V213.38H84.4298ZM95.4898 210.1V220.65H88.2198V190.58H99.9998C103.57 190.58 106.3 191.47 108.17 193.24 109.116 194.17 109.855 195.289 110.337 196.525 110.82 197.761 111.035 199.085 110.97 200.41 111.006 202.158 110.575 203.884 109.72 205.41 108.847 206.901 107.553 208.102 106 208.86 104.127 209.745 102.071 210.174 99.9998 210.11L95.4898 210.1ZM103.57 200.41C103.57 197.743 102.11 196.41 99.1898 196.41H95.4898V204.24H99.1898C102.11 204.267 103.57 202.99 103.57 200.41ZM139.7 213.4C138.448 215.673 136.556 217.53 134.26 218.74 131.676 220.063 128.802 220.719 125.9 220.65H114.55V190.58H125.9C128.804 190.507 131.682 191.149 134.28 192.45 136.57 193.633 138.457 195.471 139.7 197.73 141.001 200.127 141.656 202.822 141.6 205.55 141.654 208.287 141 210.991 139.7 213.4ZM131.88 211.89C132.693 211.055 133.323 210.06 133.729 208.969 134.135 207.877 134.309 206.713 134.24 205.55 134.31 204.388 134.136 203.225 133.729 202.135 133.323 201.045 132.693 200.052 131.88 199.22 130.061 197.624 127.685 196.811 125.27 196.96H121.82V214.14H125.27C127.683 214.286 130.057 213.478 131.88 211.89ZM165.33 190.58V196.37H153V202.96H162.52V208.49H153V220.65H145.72V190.58H165.33Z" }),
            React.createElement("path", { fill: "#5B5B5B", d: "M129.34 58.8701H111.66C108.578 58.8701 106.08 61.3684 106.08 64.4501V82.1301C106.08 85.2119 108.578 87.7101 111.66 87.7101H129.34C132.422 87.7101 134.92 85.2119 134.92 82.1301V64.4501C134.92 61.3684 132.422 58.8701 129.34 58.8701Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240.01H0z", transform: "translate(.57)" }))));
}
exports.default = PdfIconGrayscale;
