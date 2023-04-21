"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("react");
const theme_change_1 = require("theme-change");
function Navbar() {
    const themeValues = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
    ];
    (0, react_2.useEffect)(() => {
        (0, theme_change_1.themeChange)(false);
        // 👆 false parameter is required for react project
    }, []);
    return (react_1.default.createElement("div", { className: "navbar bg-base-100 fixed" },
        react_1.default.createElement("div", { className: "navbar-start" },
            react_1.default.createElement("div", { className: "dropdown" },
                react_1.default.createElement("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h8m-8 6h16" }))),
                react_1.default.createElement("ul", { tabIndex: 0, className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("a", null, "Item 1")),
                    react_1.default.createElement("li", { tabIndex: 0 },
                        react_1.default.createElement("a", { className: "justify-between" },
                            "Parent",
                            react_1.default.createElement("svg", { className: "fill-current", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                                react_1.default.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }))),
                        react_1.default.createElement("ul", { className: "p-2" },
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", null, "Submenu 1")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", null, "Submenu 2")))),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("a", null, "Item 3")))),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "btn btn-ghost normal-case text-xl" }, "Grocery Price Tracker")),
        react_1.default.createElement("div", { className: "navbar-center hidden lg:flex" },
            react_1.default.createElement("ul", { className: "menu menu-horizontal px-1" },
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", null, "My Items")))),
        react_1.default.createElement("div", { className: "navbar-end gap-3" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: "btn" }, "Login"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/register", className: "btn" }, "Sign Up"),
            react_1.default.createElement("select", { className: "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52", "data-choose-theme": true },
                react_1.default.createElement("option", null, "Theme"),
                themeValues.map((theme) => (react_1.default.createElement("option", null, theme)))))));
}
exports.default = Navbar;
