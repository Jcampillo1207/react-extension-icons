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
function MovIconGrayscale(props) {
    return React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 201 240", width: "1em", height: "1em" }, props),
        React.createElement("g", { clipPath: "url(#a)" },
            React.createElement("path", { fill: "#5B5B5B", d: "M140.1 49.24C134.633 49.2347 129.391 47.0606 125.525 43.1947C121.659 39.3288 119.485 34.0871 119.48 28.62V0H27.3398C20.2029 0 13.3581 2.83517 8.31152 7.88177C3.26492 12.9284 0.429687 19.773 0.429688 26.91V189.13C0.440286 196.26 3.28023 203.094 8.32568 208.132C13.3711 213.17 20.2098 216 27.3398 216H137.94C141.474 216.001 144.974 215.306 148.239 213.954C151.505 212.602 154.472 210.62 156.971 208.121C159.47 205.622 161.452 202.655 162.804 199.39C164.156 196.124 164.851 192.624 164.85 189.09V49.24H140.1Z", opacity: 0.3 }),
            React.createElement("path", { fill: "#5B5B5B", d: "M164.85 49.24H140.1C134.633 49.2347 129.391 47.0606 125.525 43.1947 121.659 39.3288 119.485 34.0871 119.48 28.62V0L164.85 49.24ZM184.37 170.6H59.3298C50.4601 170.6 43.2698 177.79 43.2698 186.66V223.94C43.2698 232.81 50.4601 240 59.3298 240H184.37C193.24 240 200.43 232.81 200.43 223.94V186.66C200.43 177.79 193.24 170.6 184.37 170.6Z" }),
            React.createElement("path", { fill: "#fff", d: "M73.8398 213.37V220.64H66.3198V213.37H73.8398ZM111.44 190.79V220.64H104.17V202L97.6997 220.67H91.4097L84.8997 201.96V220.67H77.6296V190.82H86.5198L94.6396 211.61 102.64 190.82 111.44 190.79ZM138.47 192.08C140.758 193.379 142.649 195.277 143.94 197.57 145.293 199.991 145.982 202.726 145.94 205.5 145.992 208.296 145.301 211.057 143.94 213.5 142.644 215.798 140.746 217.7 138.45 219 136.112 220.335 133.462 221.025 130.77 221 128.078 221.022 125.429 220.332 123.09 219 120.796 217.7 118.901 215.798 117.61 213.5 116.244 211.058 115.553 208.297 115.61 205.5 115.558 202.725 116.249 199.988 117.61 197.57 118.908 195.279 120.801 193.382 123.09 192.08 125.429 190.747 128.078 190.057 130.77 190.08 133.468 190.054 136.125 190.744 138.47 192.08ZM125.07 199.19C123.59 200.948 122.839 203.205 122.97 205.5 122.849 207.79 123.6 210.04 125.07 211.8 125.788 212.581 126.669 213.195 127.65 213.599 128.632 214.003 129.69 214.188 130.75 214.14 131.807 214.185 132.861 213.999 133.838 213.595 134.816 213.191 135.693 212.578 136.41 211.8 137.898 210.049 138.66 207.795 138.54 205.5 138.657 203.212 137.903 200.964 136.43 199.21 135.712 198.428 134.831 197.814 133.849 197.409 132.868 197.005 131.81 196.821 130.75 196.87 129.691 196.82 128.635 197.002 127.654 197.403 126.673 197.804 125.791 198.413 125.07 199.19ZM155.63 190.57 163 213.2 170.36 190.57H178.14L167.68 220.64H158.28L147.86 190.57H155.63Z" }),
            React.createElement("path", { fill: "#5B5B5B", d: "M78.6099 69.6099C68.4256 69.6099 58.6582 73.6556 51.4568 80.857C44.2554 88.0584 40.2097 97.8256 40.2097 108.01C40.2097 118.194 44.2554 127.961 51.4568 135.163C58.6582 142.364 68.4256 146.41 78.6099 146.41C88.7934 146.405 98.5579 142.355 105.757 135.153C112.956 127.95 117 118.183 117 108C116.994 97.8198 112.948 88.0583 105.75 80.8599C98.5514 73.6616 88.7899 69.6152 78.6099 69.6099ZM78.6099 77.0899C80.6467 77.0899 82.6 77.899 84.0403 79.3393C85.4806 80.7796 86.2898 82.733 86.2898 84.7699C86.2898 86.8068 85.4806 88.7602 84.0403 90.2004C82.6 91.6407 80.6467 92.4499 78.6099 92.4499C76.573 92.4499 74.6195 91.6407 73.1792 90.2004C71.7389 88.7602 70.9297 86.8068 70.9297 84.7699C70.9297 82.733 71.7389 80.7796 73.1792 79.3393C74.6195 77.899 76.573 77.0899 78.6099 77.0899ZM51.8298 92.5499C52.8484 90.7864 54.5257 89.4997 56.4929 88.9727C58.4601 88.4458 60.5561 88.7217 62.3198 89.7399C63.1939 90.2434 63.9602 90.9142 64.575 91.7139C65.1897 92.5136 65.6407 93.4266 65.9026 94.4008C66.1645 95.3749 66.232 96.391 66.1011 97.3912C65.9702 98.3913 65.6434 99.3559 65.1396 100.23C64.1191 101.994 62.44 103.281 60.4712 103.808C58.5024 104.335 56.4049 104.059 54.6396 103.04C52.8761 102.021 51.5895 100.344 51.0625 98.3768C50.5355 96.4096 50.8117 94.3136 51.8298 92.5499ZM62.3198 126.29C61.4459 126.794 60.4811 127.12 59.481 127.251C58.4808 127.382 57.4648 127.315 56.4907 127.053C55.5166 126.791 54.6034 126.34 53.8037 125.725C53.004 125.11 52.3334 124.344 51.8298 123.47C50.8117 121.706 50.5355 119.61 51.0625 117.643C51.5895 115.676 52.8761 113.998 54.6396 112.98C56.4049 111.961 58.5024 111.685 60.4712 112.212C62.44 112.739 64.1191 114.026 65.1396 115.79C66.1575 117.556 66.4324 119.655 65.9036 121.624C65.3748 123.593 64.0857 125.271 62.3198 126.29ZM78.6099 138.94C76.573 138.94 74.6195 138.131 73.1792 136.69C71.7389 135.25 70.9297 133.297 70.9297 131.26C70.9297 129.223 71.7389 127.27 73.1792 125.829C74.6195 124.389 76.573 123.58 78.6099 123.58C79.6188 123.579 80.6179 123.776 81.5503 124.162C82.4827 124.547 83.3298 125.113 84.0432 125.826C84.7566 126.54 85.3223 127.387 85.7078 128.319C86.0933 129.252 86.2911 130.251 86.2898 131.26C86.2898 133.297 85.4806 135.25 84.0403 136.69C82.6 138.131 80.6467 138.94 78.6099 138.94ZM105.39 123.47C104.887 124.345 104.217 125.112 103.417 125.728C102.618 126.343 101.704 126.795 100.73 127.057C99.7555 127.319 98.739 127.386 97.7385 127.254C96.7381 127.123 95.7732 126.795 94.8997 126.29C93.1355 125.269 91.8487 123.59 91.3218 121.621C90.7949 119.653 91.0712 117.555 92.0898 115.79C93.1085 114.026 94.7857 112.74 96.7529 112.213C98.7201 111.686 100.816 111.962 102.58 112.98C103.454 113.483 104.22 114.154 104.835 114.954C105.449 115.754 105.9 116.667 106.161 117.642C106.422 118.616 106.488 119.633 106.356 120.633C106.224 121.633 105.895 122.597 105.39 123.47ZM102.58 103C100.816 104.018 98.7201 104.294 96.7529 103.767C94.7857 103.24 93.1085 101.953 92.0898 100.19C91.0717 98.4261 90.7956 96.3302 91.3225 94.363C91.8495 92.3959 93.1362 90.7185 94.8997 89.6999C96.6634 88.6817 98.7594 88.4057 100.727 88.9327C102.694 89.4596 104.371 90.7464 105.39 92.5099C105.895 93.3829 106.224 94.347 106.356 95.347C106.488 96.3471 106.422 97.3634 106.161 98.3378C105.9 99.3122 105.449 100.226 104.835 101.026C104.22 101.826 103.454 102.496 102.58 103Z" }),
            React.createElement("path", { fill: "#5B5B5B", d: "M114.74 138.48C114.212 138.478 113.686 138.421 113.17 138.31C108.9 137.31 107.17 132.77 107.17 132.58C107.11 132.417 107.083 132.243 107.091 132.069C107.098 131.895 107.141 131.725 107.215 131.567C107.29 131.41 107.395 131.269 107.524 131.153C107.654 131.036 107.805 130.947 107.97 130.89C108.132 130.831 108.304 130.805 108.476 130.813C108.649 130.821 108.818 130.863 108.974 130.936C109.13 131.009 109.27 131.113 109.386 131.241C109.502 131.368 109.592 131.518 109.65 131.68C109.65 131.74 110.94 135.11 113.78 135.74C116.2 136.27 119.33 134.74 122.84 131.2C122.963 131.077 123.108 130.979 123.269 130.913C123.429 130.846 123.601 130.812 123.775 130.812C123.948 130.812 124.121 130.846 124.281 130.913C124.442 130.979 124.587 131.077 124.71 131.2C124.955 131.447 125.093 131.782 125.093 132.13C125.093 132.478 124.955 132.813 124.71 133.06C121.08 136.67 117.75 138.48 114.74 138.48Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "a" },
                React.createElement("path", { fill: "#fff", d: "M0 0H200V240H0z", transform: "translate(.43)" }))));
}
exports.default = MovIconGrayscale;
