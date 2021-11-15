"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hast_util_from_parse5_1 = __importDefault(require("hast-util-from-parse5"));
var hast_util_to_html_1 = __importDefault(require("hast-util-to-html"));
var parse5_1 = require("parse5");
var juice_1 = __importDefault(require("juice"));
exports.default = (function (options) { return function transformer(tree) {
    var html = (0, hast_util_to_html_1.default)(tree);
    var src = (0, juice_1.default)(html, options);
    var doc = (0, parse5_1.parseFragment)(src);
    var hast = (0, hast_util_from_parse5_1.default)(doc);
    return hast;
}; });
