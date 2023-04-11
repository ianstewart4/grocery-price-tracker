"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    productID: { type: String, required: true },
    brandName: { type: String, required: true },
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    link: { type: String, required: true },
    packageSize: { type: Number, required: true },
    uom: { type: String, required: true },
    onSale: { type: Boolean, required: true },
    saleType: { type: String },
    saleText: { type: String },
}, {
    timestamps: true
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
