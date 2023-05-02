"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
// import { findProduct } from "../features/products/productSlice";
function ProductForm() {
    const [product, setProduct] = (0, react_2.useState)("");
    const dispatch = (0, react_redux_1.useDispatch)();
    //   const onSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(findProduct({ product }));
    //     setProduct("");
    //   };
    return (react_1.default.createElement("div", { className: "input-group", title: "Enter product URL" },
        react_1.default.createElement("input", { type: "text", placeholder: "Find Superstore Items", className: "input input-bordered w-9/12", 
            // onSubmit={onSubmit}
            value: product, onChange: (e) => setProduct(e.target.value) }),
        react_1.default.createElement("button", { className: "btn btn-square", type: "submit" },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" })))));
}
exports.default = ProductForm;
