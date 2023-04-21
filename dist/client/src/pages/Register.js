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
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const react_redux_1 = require("react-redux");
const authSlice_1 = require("../features/auth/authSlice");
const Spinner_1 = __importDefault(require("../components/Spinner"));
function Register() {
    const [formData, setFormData] = (0, react_1.useState)({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const { name, email, password, password2 } = formData;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { user, isLoading, isError, isSuccess, message } = (0, react_redux_1.useSelector)((state) => state.auth);
    (0, react_1.useEffect)(() => {
        if (isError) {
            react_toastify_1.toast.error(message);
        }
        if (isSuccess || user) {
            navigate("/");
        }
        dispatch((0, authSlice_1.reset)());
    }, [user, isError, isSuccess, message, navigate, dispatch]);
    const onChange = (e) => {
        setFormData((prevState) => (Object.assign(Object.assign({}, prevState), { [e.target.name]: e.target.value })));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            react_toastify_1.toast.error("Passwords do not match");
        }
        else {
            const userData = {
                name,
                email,
                password,
            };
            dispatch((0, authSlice_1.register)(userData));
        }
    };
    if (isLoading) {
        return React.createElement(Spinner_1.default, null);
    }
    return (React.createElement("div", null,
        React.createElement(Navbar_1.default, null),
        React.createElement("div", { className: "hero min-h-screen bg-base-200" },
            React.createElement("div", { className: "hero-content flex-col lg:flex-row-reverse" },
                React.createElement("div", { className: "text-center lg:text-left" },
                    React.createElement("h1", { className: "text-5xl font-bold" }, "Sign Up!"),
                    React.createElement("p", { className: "py-6" }, "Stop wasting money! Track your frequently purchased items and buy at the right time!")),
                React.createElement("div", { className: "card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("h1", null, "Please create an account"),
                        React.createElement("form", { onSubmit: onSubmit },
                            React.createElement("div", { className: "form-control" },
                                React.createElement("label", { className: "label" },
                                    React.createElement("span", { className: "label-text" }, "Name")),
                                React.createElement("input", { type: "text", id: "name", name: "name", value: name, placeholder: "name", onChange: onChange, className: "input input-bordered" })),
                            React.createElement("div", { className: "form-control" },
                                React.createElement("label", { className: "label" },
                                    React.createElement("span", { className: "label-text" }, "Email")),
                                React.createElement("input", { type: "text", id: "email", name: "email", value: email, placeholder: "email", onChange: onChange, className: "input input-bordered" })),
                            React.createElement("div", { className: "form-control" },
                                React.createElement("label", { className: "label" },
                                    React.createElement("span", { className: "label-text" }, "Password")),
                                React.createElement("input", { type: "password", id: "password", name: "password", value: password, placeholder: "password", onChange: onChange, className: "input input-bordered" })),
                            React.createElement("div", { className: "form-control" },
                                React.createElement("label", { className: "label" },
                                    React.createElement("span", { className: "label-text" }, "Confirm Password")),
                                React.createElement("input", { type: "password", id: "password2", name: "password2", value: password2, placeholder: "confirm password", onChange: onChange, className: "input input-bordered" })),
                            React.createElement("div", { className: "form-control mt-6 gap-1" },
                                React.createElement("button", { type: "submit", className: "btn btn-secondary" }, "Sign Up")))))))));
}
exports.default = Register;
