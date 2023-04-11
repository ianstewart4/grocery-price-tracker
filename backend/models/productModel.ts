import { Schema, model } from 'mongoose';

interface IProduct {
    productID: string;
    brandName: string;
    itemName: string;
    price: number;
    imageURL: string;
    link: string;
    packageSize: number;
    uom: string;
    onSale: boolean;
    saleType: string;
    saleText: string;
}

const productSchema = new Schema<IProduct>({
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
})

export const Product = model<IProduct>('Product', productSchema)

