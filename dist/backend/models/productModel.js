"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    productID: { type: String, required: true },
    brandName: { type: String, required: true },
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    saleUnitPrice: { type: Number || null },
    compQty: { type: Number, require: true },
    packageUnits: { type: String, required: true },
    packageSizeText: { type: String, required: true },
    packageSizeNum: { type: Number, required: true },
    date: { type: Date, required: true },
    imageURL: { type: String, required: true },
    link: { type: String, required: true },
    uom: { type: String, required: true },
    onSale: { type: Boolean, required: true },
    saleType: { type: String || null },
    saleText: { type: String || null },
    saleEndDate: { type: Date || null },
    salePrice: { type: Number || null },
    saleValue: { type: Number || null },
    multiQty: { type: Number || null },
    limitQty: { type: Number || null },
}, {
    timestamps: true
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
