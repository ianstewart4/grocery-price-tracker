"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("./components/Header"));
const Dashboard_1 = __importDefault(require("./pages/Dashboard"));
const Login_1 = __importDefault(require("./pages/Login"));
const Register_1 = __importDefault(require("./pages/Register"));
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: "container" },
                React.createElement(Header_1.default, null),
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Dashboard_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/login', element: React.createElement(Login_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/register', element: React.createElement(Register_1.default, null) }))))));
}
exports.default = App;
