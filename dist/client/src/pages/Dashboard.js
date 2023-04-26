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
const React = __importStar(require("react"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const Footer_1 = __importDefault(require("../components/Footer"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
function Dashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth);
    (0, react_1.useEffect)(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);
    return (React.createElement("div", null,
        React.createElement(Navbar_1.default, null),
        React.createElement("section", { className: "min-h-screen hero-overlay bg-opacity-60" },
            React.createElement("h1", { className: "text-center text-xl pt-10" },
                "Welcome ",
                user && user.name),
            React.createElement("p", null, "Trackers Dashboard")),
        React.createElement(Footer_1.default, null)));
}
exports.default = Dashboard;
