import mongoose, { Schema, model, Types } from 'mongoose';

export interface IPriceHistory {
    date: Date;
    productID: Types.ObjectId;
    price: number;
    unitPrice: number
}

const priceHistorySchema = new Schema<IPriceHistory>({
    date: { type: Date, required: true },
    productID: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
    price: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    // priceHistory: { type: Schema.Types.ObjectId },
    // unitPriceHistory: { type: Schema.Types.ObjectId },
}, { timestamps: true })

export const PriceHistory = model<IPriceHistory>('PriceHistory', priceHistorySchema)