import mongoose, { Schema, model, Types } from 'mongoose';

export interface IPriceHistory {
    date: Date;
    productID: string; // reference mongoDB ID or productID??
    price: number; // sale price or price
    unitPrice: number; // sale unit price or unit price
    onSale: boolean;

}

const priceHistorySchema = new Schema<IPriceHistory>({
    date: { type: Date, required: true },
    productID: { type: String, required: true, ref: 'Product' },
    price: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    // priceHistory: { type: Schema.Types.ObjectId },
    // unitPriceHistory: { type: Schema.Types.ObjectId },
}, { timestamps: true })

export const PriceHistory = model<IPriceHistory>('PriceHistory', priceHistorySchema)