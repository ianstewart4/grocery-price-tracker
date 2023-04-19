import mongoose, { Schema, model, Types } from 'mongoose';

export interface ITracker {
    user: Types.ObjectId;
    productID: string;
    // priceHistory: Types.ObjectId;
    // unitPriceHistory: Types.ObjectId;
}

const trackerSchema = new Schema<ITracker>({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    productID: { type: String, required: true },
    // priceHistory: { type: Schema.Types.ObjectId },
    // unitPriceHistory: { type: Schema.Types.ObjectId },
}, { timestamps: true })

export const Tracker = model<ITracker>('Tracker', trackerSchema)