import asyncHandler from "express-async-handler"
import { Request, Response } from 'express'
import { IProduct, Product } from '../models/productModel'
import axios from "axios"
import { ddmmyyyy } from '../constants/dateConstants';
import { config } from '../constants/apiConstants';

// @desc    Get Products
// @route   GET /api/Products
// @access  Private

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find({ user: req.user.id })
    res.status(200).json(products)
})

// @desc    Set Product
// @route   POST /api/Products
// @access  Private

export const setProduct = asyncHandler(async (req: Request, res: Response) => {

    if (!req.body.productID) {
        res.status(400)
        throw new Error('Please enter a productID')
    }
    const { productID } = req.body

    const existingItem = await Product.findOne({ productID: productID })
    if (!existingItem) {
        const API = `https://api.pcexpress.ca/product-facade/v4/products/${productID}?lang=en&date=${ddmmyyyy}&pickupType=STORE&storeId=1514&banner=superstore`
        try {
            const response = await axios.get(API, config)

            // PRODUCT INFO
            const productID: string = response.data.code;
            const brandName: string = response.data.brand ?? '';
            const itemName: string = response.data.name;
            const date: Date = new Date();
            const imageURL: string = response.data.imageAssets[0].mediumUrl;
            const link: string = `https://www.realcanadiansuperstore.ca${response.data.link}`;
            const price: number = response.data.offers[0].price.value;

            // PACKAGE INFO
            const packageSizeText: string = response.data.packageSize;
            const packageSizeNum: number = Number(packageSizeText.split(' ')[0]);
            const packageUnits: string = packageSizeText.split(' ')[1];
            const uom: string = response.data.uom;

            // COMPARISON INFO
            const compQty: number = response.data.offers[0].comparisonPrices[0].quantity; // WILL THEY ALWAYS HAVE THIS?
            const divisor: number = packageSizeNum / compQty;
            const unitPrice: number = price / divisor;

            // SALE INFO
            const onSale: boolean = response.data.offers[0].badges.dealBadge ? true : false;
            const saleEndDate: Date = response.data.offers[0].badges.dealBadge?.expiryDate ?? null;
            const saleType: string | null = response.data.offers[0].badges.dealBadge?.type;
            const saleText: string | null = response.data.offers[0].badges.dealBadge?.text ?? null;
            let salePrice: number | null = null;
            let saleValue: number | null = null;
            let multiQty: number | null = null;
            let limitQty: number | null = null;

            // SALE INFO BY SALE TYPE
            if (saleType === 'MULTI') {
                multiQty = Number(saleText?.split(' ')[0])
                salePrice = Number(saleText?.split(' ')[2].slice(1)) / multiQty
                saleValue = price - salePrice
            } else if (saleType === 'LIMIT') {
                limitQty = Number(saleText?.split(' ')[2])
                salePrice = Number(saleText?.split(' ')[0].slice(1))
                saleValue = price - salePrice
            } else if (saleType === 'SALE') {
                // @ts-ignore
                saleValue = Number(saleText.slice(6))
                salePrice = price - saleValue
            }

            const saleUnitPrice: number | null = salePrice ? salePrice / divisor : null;

            const product: IProduct = await Product.create({
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
                saleValue,
                multiQty,
                limitQty,
            })
            console.log('Adding new product')
            res.status(200).json(product)

        } catch (err) {
            console.log(err)
            console.log('This code is invalid or item is not currently available at this location')
        }
    } else {
        console.log('This product already exists')
        res.status(200).json(existingItem)
    }
})

// @desc    Update Products
// @route   PUT /api/Products/:id
// @access  Private

export const updateProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        res.status(400)
        throw new Error('Product not found')
    }

    const productID = product.productID

    const API = `https://api.pcexpress.ca/product-facade/v4/products/${productID}?lang=en&date=${ddmmyyyy}&pickupType=STORE&storeId=1514&banner=superstore`
    try {
        const response = await axios.get(API, config);

        // PRODUCT INFO
        const productID: string = response.data.code;
        const brandName: string = response.data.brand ?? '';
        const itemName: string = response.data.name;
        const date: Date = new Date();
        const imageURL: string = response.data.imageAssets[0].mediumUrl;
        const link: string = `https://www.realcanadiansuperstore.ca${response.data.link}`;
        const price: number = response.data.offers[0].price.value;

        // PACKAGE INFO
        const packageSizeText: string = response.data.packageSize;
        const packageSizeNum: number = Number(packageSizeText.split(' ')[0]);
        const packageUnits: string = packageSizeText.split(' ')[1];
        const uom: string = response.data.uom;

        // COMPARISON INFO
        const compQty: number = response.data.offers[0].comparisonPrices[0].quantity; // WILL THEY ALWAYS HAVE THIS?
        const divisor: number = packageSizeNum / compQty;
        const unitPrice: number = price / divisor;

        // SALE INFO
        const onSale: boolean = response.data.offers[0].badges.dealBadge ? true : false;
        const saleEndDate: Date = response.data.offers[0].badges.dealBadge?.expiryDate ?? null;
        const saleType: string | null = response.data.offers[0].badges.dealBadge?.type;
        const saleText: string | null = response.data.offers[0].badges.dealBadge?.text ?? null;
        let salePrice: number | null = null;
        let saleValue: number | null = null;
        let multiQty: number | null = null;
        let limitQty: number | null = null;

        if (saleType === 'MULTI') {
            multiQty = Number(saleText?.split(' ')[0])
            salePrice = Number(saleText?.split(' ')[2].slice(1)) / multiQty
            saleValue = price - salePrice
        } else if (saleType === 'LIMIT') {
            limitQty = Number(saleText?.split(' ')[2])
            salePrice = Number(saleText?.split(' ')[0].slice(1))
            saleValue = price - salePrice
        } else if (saleType === 'SALE') {
            // @ts-ignore
            saleValue = Number(saleText.slice(6))
            salePrice = price - saleValue
        }

        const saleUnitPrice: number | null = salePrice ? salePrice / divisor : null;

        const productDetails = {
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
            saleValue,
            multiQty,
            limitQty,
        }

        try {
            // // Check if price or onSale has changed
            // if (product.onSale !== onSale || product.price !== price) {
            //     // If yes, add new priceHistory price and date
            // } else {
            //     // If no, update priceHistory date
            //     const updatedPriceHistory = await PriceHistory.findByIdAndUpdate(req.params.id, { })
            // }



            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, productDetails)
            console.log(typeof updatedProduct)
            console.log('Updating product')
            res.status(200).json(updatedProduct)
        } catch (err) {
            res.status(400).json({ message: 'Failed to complete request' })
            throw new Error('Failed to complete request')
        }

    } catch (err) {
        console.log(err)
        console.log('This item is not currently available at this location')
    }
})

// @desc    Delete Products
// @route   DELETE /api/Products/:id
// @access  Private

export const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        res.status(400)
        throw new Error('Product not found')
    }

    await product.deleteOne()

    res.json({ message: `Deleted Product ${req.params.id}` })
})
