"use strict";
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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const monsters_1 = __importStar(require("../classes/monsters"));
// TODO: genericize token picker from terrain_token_picker.tsx and use here for monsters
const localMonsterDeck = new monsters_1.default();
function MonsterPicker({ HeaderText = "Randomly draw a token" }) {
    const [displayedLevelOneMonster, setLevelOneMonster] = (0, react_1.useState)(new monsters_1.levelOneMonster(" "));
    const [displayedLevelTwoMonster, setLevelTwoMonster] = (0, react_1.useState)(new monsters_1.levelTwoMonster(" "));
    const [displayedLevelThreeMonster, setLevelThreeMonster] = (0, react_1.useState)(new monsters_1.levelThreeMonster(" "));
    const [displayedToken, setToken] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setToken(displayedLevelOneMonster);
    }, [displayedLevelOneMonster]);
    (0, react_1.useEffect)(() => {
        setToken(displayedLevelTwoMonster);
    }, [displayedLevelTwoMonster]);
    (0, react_1.useEffect)(() => {
        setToken(displayedLevelThreeMonster);
    }, [displayedLevelThreeMonster]);
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { fluid: true, className: "mx-auto", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'py-2', children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { className: 'mx-auto', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { className: 'd-flex justify-content-center', children: (0, jsx_runtime_1.jsx)("h1", { className: 'text-center', children: HeaderText }) }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { id: 'TerrainTokenButtons', className: 'justify-content-center px-1', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "secondary", size: "lg", onClick: () => setLevelOneMonster(localMonsterDeck.drawLevelOneMonster()), children: "Level 1" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "success", size: "lg", onClick: () => setLevelTwoMonster(localMonsterDeck.drawLevelTwoMonster()), children: "Level 2" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", size: "lg", onClick: () => setLevelThreeMonster(localMonsterDeck.drawLevelThreeMonster()), children: "Level 3" }) })] })] }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'py-2', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { className: 'mx-auto', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { className: 'd-flex justify-content-center', children: displayedToken?.tokenImg() }) }) })] }));
}
exports.default = MonsterPicker;