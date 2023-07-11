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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
function ProductDisplay({ props }) {
    return (React.createElement("div", { className: "card lg:card-side bg-base-100 shadow-xl mx-8 my-2" },
        React.createElement("figure", { className: "w-1/6" },
            React.createElement("img", { src: props.imageURL, alt: "product image" })),
        React.createElement("div", { className: "card-body" },
            React.createElement("h2", { className: "card-title" },
                `${props.brandName} ${props.itemName}`,
                " (",
                props.packageSizeText,
                ")"),
            React.createElement("p", null,
                "Regular Price: $",
                props.price,
                " ($",
                props.unitPrice.toFixed(2),
                "/",
                props.compQty,
                props.packageUnits,
                ")"),
            props.salePrice && (React.createElement("div", null,
                React.createElement("p", null,
                    "Sale Price: $",
                    props.salePrice,
                    " ($",
                    props.saleUnitPrice.toFixed(2),
                    "/",
                    props.compQty,
                    props.packageUnits,
                    ")"),
                React.createElement("p", null,
                    "Ends ",
                    props.saleEndDate.slice(0, 10)))),
            React.createElement("div", { className: "card-actions justify-end" },
                React.createElement("button", { className: "btn btn-primary" }, "Add To List")),
            React.createElement("div", { className: "card-actions justify-end" },
                React.createElement("button", { onClick: () => window.open(props.link, "_blank"), className: "btn btn-primary" }, "Go to item")))));
}
// "_id":"643875c155dd510398a2bdc1",
// "productID":"21353457_EA",
// "brandName":"Liberte",
// "itemName":"Greek 5% M.F Plain Yogourt",
// "price":6.99,
// "unitPrice":1.0753846153846154,
// "saleUnitPrice":0.8415384615384615,
// "compQty":100,
// "packageUnits":"g",
// "packageSizeText":"650 g",
// "packageSizeNum":650,
// "date":"2023-04-13T21:36:01.238Z",
// "imageURL":"https://assets.shop.loblaws.ca/products/21353457/b3/en/front/21353457_front_a06_@2.png",
// "link":"https://www.realcanadiansuperstore.ca/greek-5-m-f-plain-yogourt/p/21353457_EA",
// "uom":"EA",
// "onSale":true,
// "saleType":"LIMIT",
// "saleText":"$5.47 LIMIT 4",
// "saleEndDate":"2023-04-19T00:00:00.000Z",
// "salePrice":5.47,
// "saleValue":1.5200000000000005,
// "multiQty":null,
// "limitQty":4,
// "createdAt":"2023-04-13T21:36:01.246Z",
// "updatedAt":"2023-04-13T21:36:01.246Z",
// "__v":0
exports.default = ProductDisplay;
