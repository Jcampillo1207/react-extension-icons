"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var getIconComponent_1 = require("../utils/getIconComponent");
var Icon = function (_a) {
    var extension = _a.extension, _b = _a.variant, variant = _b === void 0 ? 'color' : _b, _c = _a.size, size = _c === void 0 ? 24 : _c, className = _a.className, color = _a.color;
    var IconComponent = (0, getIconComponent_1.getIconComponent)(extension, variant);
    if (!IconComponent) {
        return null; // Return null if no matching icon component is found
    }
    return (react_1.default.createElement(IconComponent, { width: size, height: size, className: className, color: color }));
};
exports.default = Icon;
