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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
const Footer_1 = __importDefault(require("../components/Footer"));
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const PRODUCT_API = "/api/products/";
function Dashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth);
    const [userProductID, setUserProductID] = (0, react_1.useState)("");
    const [productData, setProductData] = (0, react_1.useState)({});
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserProductID(e.currentTarget.elements.id.value);
        e.target.reset();
    };
    (0, react_2.useEffect)(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);
    // TODO: Fix double render at the beginning
    (0, react_2.useEffect)(() => {
        // data fetching here
        console.log("This is the userProductID: " + userProductID);
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(PRODUCT_API, {
                    productID: userProductID,
                }, {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                setProductData(response.data);
                console.log(response.data);
            }
            catch (err) {
                console.log(err);
            }
        });
        fetchData();
        console.log(productData);
        console.log("...processing...");
    }, [userProductID]);
    return (React.createElement("div", null,
        React.createElement(Navbar_1.default, null),
        React.createElement("section", { className: "min-h-screen hero-overlay bg-opacity-60" },
            React.createElement("h1", { className: "text-center text-xl pt-10" },
                "Welcome ",
                user && user.name),
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("div", { className: "input-group" },
                    React.createElement("input", { type: "text", name: "text", id: "id", placeholder: "Find Superstore Items", className: "input input-bordered w-9/12", onSubmit: handleSubmit }),
                    React.createElement("button", { className: "btn btn-square", type: "submit" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }))))),
            React.createElement("p", null, "Trackers Dashboard"),
            React.createElement("h1", null, JSON.stringify(productData))),
        React.createElement(Footer_1.default, null)));
}
exports.default = Dashboard;
