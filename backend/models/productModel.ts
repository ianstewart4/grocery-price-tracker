import { Schema, model } from 'mongoose';

interface IProduct {
    productID: string;
    brandName: string;
    itemName: string;
    price: number;
    date: Date;
    imageURL: string;
    link: string;
    packageSize: string;
    uom: string;
    onSale: boolean;
    saleType: string | null;
    saleText: string | null;
    saleEndDate: Date | null;
    salePrice: number | null;
    sale: number | null;
    multiQty: number | null;
    limitQty: number | null;
}

const productSchema = new Schema<IProduct>({
    productID: { type: String, required: true },
    brandName: { type: String, required: true },
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    imageURL: { type: String, required: true },
    link: { type: String, required: true },
    packageSize: { type: String, required: true },
    uom: { type: String, required: true },
    onSale: { type: Boolean, required: true },
    saleType: { type: String || null },
    saleText: { type: String || null },
    saleEndDate: { type: Date || null },
    salePrice: { type: Number || null },
    sale: { type: Number || null },
    multiQty: { type: Number || null },
    limitQty: { type: Number || null },
}, {
    timestamps: true
})

export const Product = model<IProduct>('Product', productSchema)
