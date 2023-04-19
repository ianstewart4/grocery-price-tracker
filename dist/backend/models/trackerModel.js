"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
const mongoose_1 = require("mongoose");
const trackerSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' },
    productID: { type: String, required: true },
    // priceHistory: { type: Schema.Types.ObjectId },
    // unitPriceHistory: { type: Schema.Types.ObjectId },
}, { timestamps: true });
exports.Tracker = (0, mongoose_1.model)('Tracker', trackerSchema);
