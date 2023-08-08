"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
const MonsterPicker_1 = __importDefault(require("../components/MonsterPicker"));
function MonsterRoller() {
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { id: "MonsterRoller", children: (0, jsx_runtime_1.jsx)(MonsterPicker_1.default, { HeaderText: "Roll A New Monster" }) }));
}
exports.default = MonsterRoller;