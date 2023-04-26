"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("react");
const theme_change_1 = require("theme-change");
const react_redux_1 = require("react-redux");
const authSlice_1 = require("../features/auth/authSlice");
const ProductForm_1 = __importDefault(require("./ProductForm"));
function Navbar() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth);
    const onLogout = () => {
        dispatch((0, authSlice_1.logout)());
        dispatch((0, authSlice_1.reset)());
        navigate("/");
    };
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
    return (react_1.default.createElement("div", { className: "navbar bg-base-100 sticky" },
        react_1.default.createElement("div", { className: "navbar-start" },
            react_1.default.createElement(ProductForm_1.default, null)),
        react_1.default.createElement("div", { className: "navbar-center hidden lg:flex" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "btn btn-ghost normal-case text-xl" }, "Grocery Price Tracker")),
        react_1.default.createElement("div", { className: "navbar-end gap-3" },
            user ? (react_1.default.createElement("button", { onClick: onLogout, className: "btn" }, "Logout")) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: "btn" }, "Login"),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/register", className: "btn" }, "Sign Up"))),
            react_1.default.createElement("select", { className: "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52", "data-choose-theme": true },
                react_1.default.createElement("option", null, "Theme"),
                themeValues.map((theme) => (react_1.default.createElement("option", { key: theme }, theme)))))));
}
exports.default = Navbar;
