"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Navbar_1 = __importDefault(require("../components/Navbar"));
function Product() {
    // const navigate = useNavigate();
    // const { product } = useSelector((state) => state.product);
    // useEffect(() => {
    //   if (!user) {
    //     navigate("/login");
    //   }
    // }, [user, navigate]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement("div", { className: "card lg:card-side bg-base-100 shadow-xl" },
            react_1.default.createElement("figure", null,
                react_1.default.createElement("img", { src: true, alt: "Album" })),
            react_1.default.createElement("div", { className: "card-body" },
                react_1.default.createElement("h2", { className: "card-title" }, "New album is released!"),
                react_1.default.createElement("p", null, "Click the button to listen on Spotiwhy app."),
                react_1.default.createElement("div", { className: "card-actions justify-end" },
                    react_1.default.createElement("button", { className: "btn btn-primary" }, "Track"))))));
}
exports.default = Product;
