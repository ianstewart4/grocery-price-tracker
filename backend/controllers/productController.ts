import asyncHandler from "express-async-handler"
import { Request, Response } from 'express'
import { Product } from '../models/productModel'
import axios from "axios"
import { ddmmyyyy } from '../constants/dateConstants';
import { config } from '../constants/apiConstants';

// @desc    Get Products
// @route   GET /api/Products
// @access  Private

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find()
    res.status(200).json(products)
})

// @desc    Set Products
// @route   POST /api/Products
// @access  Private

export const setProduct = asyncHandler(async (req: Request, res: Response) => {

    if (!req.body.productID) {
        res.status(400)
        throw new Error('It is not receiving the productID')
    }
    const { productID } = req.body

    const existingItem = await Product.findOne({ productID: productID })
    if (!existingItem || existingItem) { // UPDATE CONDITION ONCE COMPLETE
        const API = `https://api.pcexpress.ca/product-facade/v4/products/${productID}?lang=en&date=${ddmmyyyy}&pickupType=STORE&storeId=1514&banner=superstore`
        try {
            const response = await axios.get(API, config)
            // const unitSize: number = response.data.offers[0].comparisonPrices[0].quantity // The denominator for the per unit price eg. 100ml
            // const unitPrice: number = Number((price / (pkgSize / unitSize)).toFixed(2))

            // PRODUCT INFO
            const productID: string = response.data.code;
            const brandName: string = response.data.brand ?? '';
            const itemName: string = response.data.name;
            const date: Date = new Date();
            const imageURL: string = response.data.imageAssets[0].mediumUrl;
            const link: string = `https://www.realcanadiansuperstore.ca${response.data.link}`;
            const price: number = response.data.offers[0].price.value;

            // PACKAGE INFO
            const packageSizeText = response.data.packageSize;
            const packageSizeNum: number = Number(packageSizeText.split(' ')[0]);
            const packageUnits: string = packageSizeText.split(' ')[1];

            const uom = response.data.uom;

            // COMPARISON INFO
            const compQty: number = response.data.offers[0].comparisonPrices[0].quantity; // WILL THEY ALWAYS HAVE THIS?
            const divisor: number = packageSizeNum / compQty;
            const unitPrice: number = price / divisor;

            // SALE INFO
            const onSale = response.data.offers[0].badges.dealBadge ? true : false;
            const saleEndDate = response.data.offers[0].badges.dealBadge?.expiryDate ?? null;
            const saleType: string | null = response.data.offers[0].badges.dealBadge?.type;
            const saleText: string | null = response.data.offers[0].badges.dealBadge?.text ?? null;
            let salePrice: number | null = null;
            let sale: number | null = null;
            let multiQty: number | null = null;
            let limitQty: number | null = null;

            if (saleType === 'MULTI') {
                multiQty = Number(saleText?.split(' ')[0])
                salePrice = Number(saleText?.split(' ')[2].slice(1)) / multiQty
                sale = price - salePrice
            } else if (saleType === 'LIMIT') {
                limitQty = Number(saleText?.split(' ')[2])
                salePrice = Number(saleText?.split(' ')[0].slice(1))
                sale = price - salePrice
            } else if (saleType === 'SALE') {
                // @ts-ignore
                sale = Number(saleText.slice(6))
                salePrice = price - sale
            }

            const saleUnitPrice: number | null = salePrice ? salePrice / divisor : null;

            const product = await Product.create({
                productID,
                brandName,
                itemName,
                price,
                unitPrice,
                saleUnitPrice,
                compQty,
                packageUnits,
                packageSizeText,
                packageSizeNum,
                date,
                imageURL,
                link,
                uom,
                onSale,
                saleType,
                saleText,
                saleEndDate,
                salePrice,
                sale,
                multiQty,
                limitQty,
            })
            res.status(200).json(product)

        } catch (err) {
            console.log(err)
            console.log('This code is invalid or item is not currently available at this location')
        }
    } else {
        res.status(200).json(existingItem)
    }
})

// @desc    Update Products
// @route   PUT /api/Products/:id
// @access  Private

export const updateProduct = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: `Update Product ${req.params.id}` })
})

// @desc    Delete Products
// @route   DELETE /api/Products/:id
// @access  Private

export const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: `Delete Product ${req.params.id}` })
})
