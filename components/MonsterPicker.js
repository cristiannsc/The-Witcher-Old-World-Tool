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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const monsters_1 = __importStar(require("../classes/monsters"));
const PageTitle_1 = __importDefault(require("./PageTitle"));
require("../css/MonsterPicker.css");
function MonsterPicker({ HeaderText = "Randomly draw a token" }) {
    const expansionsNames = ["Skellige", "Legendary Hunt", "Wild Hunt", "Monster Pack"];
    const [localMonsterDeck, setLocalMonsterDeck] = (0, react_1.useState)(new monsters_1.default());
    const [displayedToken, setToken] = (0, react_1.useState)(new monsters_1.levelOneMonster(" "));
    const [expansions, setExpansions] = (0, react_1.useState)(new Array(expansionsNames.length).fill(false));
    const handleToggleExpansions = (position) => {
        const updatedExpansions = expansions.map((item, index) => index === position ? !item : item);
        setExpansions(updatedExpansions);
    };
    (0, react_1.useEffect)(() => {
        setLocalMonsterDeck(new monsters_1.default(...expansions));
    }, [expansions]);
    // useEffect(() => {
    //     const val = window.sessionStorage.getItem("localMonsterDeck");
    //     if (val !== null) setLocalMonsterDeck(JSON.parse(val));
    // }, []);
    // useEffect(() => {
    //     window.sessionStorage.setItem("localMonsterDeck", JSON.stringify(localMonsterDeck));
    // }, [localMonsterDeck]);
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { fluid: true, className: "mx-auto min-h-screen", children: [(0, jsx_runtime_1.jsx)(PageTitle_1.default, { HeaderText: HeaderText }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { id: 'tokensRow', className: 'py-2 mb-2', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { className: 'd-flex justify-content-center', children: displayedToken?.tokenImg() }) }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { id: 'MonsterButtons', className: 'justify-content-center px-1 py-2 mb-4', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "secondary", size: "lg", onClick: () => setToken(localMonsterDeck.drawLevelOneMonster()), children: "Level I" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "warning", size: "lg", onClick: () => setToken(localMonsterDeck.drawLevelTwoMonster()), children: "Level II" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "danger", size: "lg", onClick: () => setToken(localMonsterDeck.drawLevelThreeMonster()), children: "Level III" }) }), expansions[1] || expansions[2] ?
                        (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: "auto", className: 'p-1', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "danger", size: "lg", onClick: () => setToken(localMonsterDeck.drawLegendaryMonster()), children: "Legendary" }) })
                        : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { id: 'expansionToggleRow', className: 'justify-content-center p-2', children: expansionsNames.map((name, index) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Switch, { checked: expansions[index], onChange: () => handleToggleExpansions(index), label: name }, name))) })] }));
}
exports.default = MonsterPicker;
