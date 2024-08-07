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
function FlvIconColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 201 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: "#FF3E4C", d: "M140.38 49.24C134.913 49.2347 129.671 47.0606 125.805 43.1947C121.939 39.3288 119.765 34.0871 119.76 28.62V1.85821e-06H27.63C24.0953 -0.00131167 20.5949 0.693768 17.3289 2.04553C14.0628 3.3973 11.0952 5.37928 8.59534 7.87824C6.09545 10.3772 4.11238 13.3442 2.7594 16.6097C1.40642 19.8752 0.709961 23.3753 0.709961 26.91V189.13C0.720561 196.262 3.56176 203.098 8.60938 208.136C13.657 213.174 20.4982 216.003 27.63 216H138.23C141.764 216 145.263 215.304 148.528 213.952C151.793 212.599 154.759 210.617 157.258 208.118C159.757 205.619 161.739 202.653 163.092 199.388C164.444 196.123 165.14 192.624 165.14 189.09V49.24H140.38Z", opacity: 0.3 }),
            React.createElement("path", { fill: "#FF3E4C", d: "M165.14 49.24H140.38C134.913 49.2347 129.671 47.0606 125.805 43.1947 121.939 39.3288 119.765 34.0871 119.76 28.62V0L165.14 49.24ZM184.66 170.6H59.62C50.7503 170.6 43.5601 177.79 43.5601 186.66V223.94C43.5601 232.81 50.7503 240 59.62 240H184.66C193.53 240 200.72 232.81 200.72 223.94V186.66C200.72 177.79 193.53 170.6 184.66 170.6Z" }),
            React.createElement("path", { fill: "#fff", d: "M88.09 213.37V220.64H80.5699V213.37H88.09ZM111.49 190.57V196.36H99.15V203H108.68V208.53H99.15V220.69H91.88V190.62L111.49 190.57ZM122.5 215.07H132.2V220.64H115.2V190.57H122.47L122.5 215.07ZM141.17 190.57 148.53 213.2 155.89 190.57H163.67L153.21 220.64H143.81L133.39 190.57H141.17Z" }),
            React.createElement("path", { fill: "#FF3E4C", d: "M120.16 131.91V84.1999C120.161 83.9686 120.141 83.7377 120.1 83.5099C120.096 83.4433 120.096 83.3766 120.1 83.3099C120.1 83.1499 120.01 82.9999 119.96 82.8499L119.87 82.65C119.801 82.5057 119.725 82.3654 119.64 82.2299C119.613 82.1731 119.579 82.1194 119.54 82.0699C119.417 81.889 119.28 81.7184 119.13 81.5599L119.05 81.4999C118.918 81.3668 118.774 81.2463 118.62 81.1399L118.45 81.03C118.32 80.95 118.18 80.8799 118.04 80.8099L117.84 80.7199C117.68 80.6595 117.516 80.6094 117.35 80.5699H117.19C116.963 80.521 116.732 80.4975 116.5 80.4999H49.0999C48.1742 80.5847 47.3134 81.012 46.6864 81.6983C46.0593 82.3846 45.711 83.2803 45.7099 84.21C45.7051 84.2665 45.7051 84.3234 45.7099 84.3799V132.06C45.6858 132.674 45.8808 133.276 46.26 133.76C46.5888 134.313 47.0556 134.772 47.6147 135.091C48.1739 135.41 48.8062 135.579 49.4499 135.58H116.45C117.424 135.57 118.356 135.181 119.048 134.496C119.74 133.811 120.139 132.884 120.16 131.91ZM49.67 89.4799V82.2399H55.56V89.4799H49.67ZM59.6099 89.4799V82.2399H65.5V89.4799H59.6099ZM69.55 89.4799V82.2399H75.4399V89.4799H69.55ZM79.4899 89.4799V82.2399H85.38V89.4799H79.4899ZM89.43 89.4799V82.2399H95.3199V89.4799H89.43ZM99.3599 89.4799V82.2399H105.25V89.4799H99.3599ZM109.3 89.4799V82.2399H115.19V89.4799H109.3ZM48.3 124.59V91.4399H117.52V124.59H48.3ZM49.65 133.78V126.54H55.54V133.78H49.65ZM59.5899 133.78V126.54H65.4799V133.78H59.5899ZM69.53 133.78V126.54H75.42V133.78H69.53ZM79.4699 133.78V126.54H85.3599V133.78H79.4699ZM89.41 133.78V126.54H95.3V133.78H89.41ZM99.3399 133.78V126.54H105.23V133.78H99.3399ZM109.28 133.78V126.54H115.17V133.78H109.28Z" }),
            React.createElement("path", { fill: "#FF3E4C", d: "M90.9399 105.56L81.37 100.03C80.8747 99.744 80.3128 99.5934 79.7408 99.5933C79.1689 99.5931 78.6069 99.7434 78.1115 100.029C77.616 100.315 77.2043 100.726 76.918 101.221C76.6316 101.716 76.4805 102.278 76.48 102.85V113.91C76.4805 114.482 76.6316 115.044 76.918 115.539C77.2043 116.034 77.616 116.445 78.1115 116.731C78.6069 117.017 79.1689 117.167 79.7408 117.167C80.3128 117.167 80.8747 117.016 81.37 116.73L90.9399 111.2C91.434 110.913 91.8442 110.502 92.1293 110.007C92.4144 109.512 92.5645 108.951 92.5645 108.38C92.5645 107.809 92.4144 107.248 92.1293 106.753C91.8442 106.258 91.434 105.847 90.9399 105.56Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200.01V240H0z", transform: "translate(.71)" }))));
}
exports.default = FlvIconColor;
