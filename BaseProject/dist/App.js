"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const router_1 = __importDefault(require("./router"));
class App extends react_2.Component {
    render() {
        return (react_1.default.createElement(router_1.default, null));
    }
}
exports.default = App;
