"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceHistory = void 0;
const mongoose_1 = require("mongoose");
const priceHistorySchema = new mongoose_1.Schema({
    date: { type: Date, required: true },
    productID: { type: String, required: true, ref: 'Product' },
    price: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    // priceHistory: { type: Schema.Types.ObjectId },
    // unitPriceHistory: { type: Schema.Types.ObjectId },
}, { timestamps: true });
exports.PriceHistory = (0, mongoose_1.model)('PriceHistory', priceHistorySchema);
