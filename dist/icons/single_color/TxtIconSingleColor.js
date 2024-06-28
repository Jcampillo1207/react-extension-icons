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
function TxtIconSingleColor(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 201 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: props.color || "#4690FF", d: "M140.53 49.25C135.062 49.2447 129.819 47.0709 125.952 43.2053C122.084 39.3398 119.908 34.0979 119.9 28.6299V0H27.7703C20.6333 0 13.7885 2.83523 8.74194 7.88184C3.69534 12.9284 0.860352 19.7729 0.860352 26.9099V189.13C0.860352 196.267 3.69534 203.112 8.74194 208.158C13.7885 213.205 20.6333 216.04 27.7703 216.04H138.37C145.507 216.04 152.352 213.205 157.398 208.158C162.445 203.112 165.28 196.267 165.28 189.13V49.25H140.53Z", opacity: 0.3 }),
            React.createElement("path", { fill: props.color || "#4690FF", d: "M165.28 49.25H140.53C135.062 49.2447 129.819 47.0709 125.952 43.2053 122.084 39.3398 119.908 34.0979 119.9 28.6299V0L165.28 49.25ZM131.46 83.73H28.2102C27.2191 83.7273 26.2694 83.3324 25.5686 82.6316 24.8678 81.9308 24.4729 80.9811 24.4702 79.99 24.4702 78.9972 24.8638 78.0448 25.5649 77.3418 26.266 76.6388 27.2174 76.2426 28.2102 76.24H131.46C132.453 76.2426 133.404 76.6388 134.105 77.3418 134.807 78.0448 135.2 78.9972 135.2 79.99 135.198 80.9811 134.803 81.9308 134.102 82.6316 133.401 83.3324 132.451 83.7273 131.46 83.73ZM131.46 106.1H28.2102C27.2191 106.097 26.2694 105.703 25.5686 105.002 24.8678 104.301 24.4729 103.351 24.4702 102.36 24.4702 101.367 24.8638 100.415 25.5649 99.7119 26.266 99.0089 27.2174 98.6128 28.2102 98.6101H131.46C132.453 98.6128 133.404 99.0089 134.105 99.7119 134.807 100.415 135.2 101.367 135.2 102.36 135.198 103.351 134.803 104.301 134.102 105.002 133.401 105.703 132.451 106.097 131.46 106.1ZM131.46 128.47H28.2102C27.2174 128.467 26.266 128.071 25.5649 127.368 24.8638 126.665 24.4702 125.713 24.4702 124.72 24.4729 123.729 24.8678 122.779 25.5686 122.078 26.2694 121.378 27.2191 120.983 28.2102 120.98H131.46C132.451 120.983 133.401 121.378 134.102 122.078 134.803 122.779 135.198 123.729 135.2 124.72 135.2 125.713 134.807 126.665 134.105 127.368 133.404 128.071 132.453 128.467 131.46 128.47ZM131.46 150.83H28.2102C27.2183 150.83 26.2671 150.436 25.5657 149.735 24.8643 149.033 24.4702 148.082 24.4702 147.09 24.4702 146.097 24.8638 145.145 25.5649 144.442 26.266 143.739 27.2174 143.343 28.2102 143.34H131.46C132.453 143.343 133.404 143.739 134.105 144.442 134.807 145.145 135.2 146.097 135.2 147.09 135.2 148.082 134.806 149.033 134.105 149.735 133.403 150.436 132.452 150.83 131.46 150.83ZM184.8 170.61H59.7603C50.8906 170.61 43.7002 177.8 43.7002 186.67V223.95C43.7002 232.82 50.8906 240.01 59.7603 240.01H184.8C193.67 240.01 200.86 232.82 200.86 223.95V186.67C200.86 177.8 193.67 170.61 184.8 170.61Z" }),
            React.createElement("path", { fill: "#fff", d: "M86.4202 213.38V220.65H78.8901V213.38H86.4202ZM111.81 190.58V196.37H103.64V220.65H96.3303V196.37H88.2402V190.58H111.81ZM133.12 220.65 126.78 211.29 121.33 220.65H113L122.61 205.17 112.7 190.58H121.33L127.5 199.64 132.82 190.58H141.11L131.63 205.72 141.75 220.65H133.12ZM166.16 190.58V196.37H158V220.65H150.68V196.37H142.6V190.58H166.16Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240.01H0z", transform: "translate(.86)" }))));
}
exports.default = TxtIconSingleColor;
