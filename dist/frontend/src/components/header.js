"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const react_router_dom_1 = require("react-router-dom");
function Header() {
    return (React.createElement("header", { className: 'header' },
        React.createElement("div", { className: "logo" },
            React.createElement(react_router_dom_1.Link, { to: '/' }, "TrackerSetter")),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: '/login' },
                    React.createElement(fa_1.FaSignInAlt, null),
                    " Login")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: '/register' },
                    React.createElement(fa_1.FaUser, null),
                    " Register")))));
}
exports.default = Header;
