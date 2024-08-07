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
function TxtIconColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 201 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: "#0072FF", d: "M140.53 49.25C135.062 49.2447 129.819 47.0709 125.952 43.2053C122.084 39.3398 119.908 34.0979 119.9 28.6299V0H27.77C20.633 0 13.7883 2.83523 8.7417 7.88184C3.6951 12.9284 0.860107 19.7729 0.860107 26.9099V189.13C0.860107 196.267 3.6951 203.112 8.7417 208.158C13.7883 213.205 20.633 216.04 27.77 216.04H138.37C145.507 216.04 152.352 213.205 157.398 208.158C162.445 203.112 165.28 196.267 165.28 189.13V49.25H140.53Z", opacity: 0.3 }),
            React.createElement("path", { fill: "#0072FF", d: "M165.28 49.25H140.53C135.062 49.2447 129.819 47.0709 125.952 43.2053 122.084 39.3398 119.908 34.0979 119.9 28.6299V0L165.28 49.25ZM131.46 83.73H28.21C27.2189 83.7273 26.2692 83.3324 25.5684 82.6316 24.8675 81.9308 24.4726 80.9811 24.47 79.99 24.47 78.9972 24.8636 78.0448 25.5647 77.3418 26.2658 76.6388 27.2171 76.2426 28.21 76.24H131.46C132.453 76.2426 133.404 76.6388 134.105 77.3418 134.806 78.0448 135.2 78.9972 135.2 79.99 135.197 80.9811 134.802 81.9308 134.102 82.6316 133.401 83.3324 132.451 83.7273 131.46 83.73ZM131.46 106.1H28.21C27.2189 106.097 26.2692 105.703 25.5684 105.002 24.8675 104.301 24.4726 103.351 24.47 102.36 24.47 101.367 24.8636 100.415 25.5647 99.7119 26.2658 99.0089 27.2171 98.6128 28.21 98.6101H131.46C132.453 98.6128 133.404 99.0089 134.105 99.7119 134.806 100.415 135.2 101.367 135.2 102.36 135.197 103.351 134.802 104.301 134.102 105.002 133.401 105.703 132.451 106.097 131.46 106.1ZM131.46 128.47H28.21C27.2171 128.467 26.2658 128.071 25.5647 127.368 24.8636 126.665 24.47 125.713 24.47 124.72 24.4726 123.729 24.8675 122.779 25.5684 122.078 26.2692 121.378 27.2189 120.983 28.21 120.98H131.46C132.451 120.983 133.401 121.378 134.102 122.078 134.802 122.779 135.197 123.729 135.2 124.72 135.2 125.713 134.806 126.665 134.105 127.368 133.404 128.071 132.453 128.467 131.46 128.47ZM131.46 150.83H28.21C27.2181 150.83 26.2668 150.436 25.5654 149.735 24.864 149.033 24.47 148.082 24.47 147.09 24.47 146.097 24.8636 145.145 25.5647 144.442 26.2658 143.739 27.2171 143.343 28.21 143.34H131.46C132.453 143.343 133.404 143.739 134.105 144.442 134.806 145.145 135.2 146.097 135.2 147.09 135.2 148.082 134.806 149.033 134.104 149.735 133.403 150.436 132.452 150.83 131.46 150.83ZM184.8 170.61H59.76C50.8903 170.61 43.7 177.8 43.7 186.67V223.95C43.7 232.82 50.8903 240.01 59.76 240.01H184.8C193.67 240.01 200.86 232.82 200.86 223.95V186.67C200.86 177.8 193.67 170.61 184.8 170.61Z" }),
            React.createElement("path", { fill: "#fff", d: "M86.4199 213.38V220.65H78.8899V213.38H86.4199ZM111.81 190.58V196.37H103.64V220.65H96.3301V196.37H88.24V190.58H111.81ZM133.12 220.65 126.78 211.29 121.33 220.65H113L122.61 205.17 112.7 190.58H121.33L127.5 199.64 132.82 190.58H141.11L131.63 205.72 141.75 220.65H133.12ZM166.16 190.58V196.37H158V220.65H150.68V196.37H142.6V190.58H166.16Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240.01H0z", transform: "translate(.86)" }))));
}
exports.default = TxtIconColor;
