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

            // // Need to figure out what kinds of prices go here. It would be ideal to return a number 
            // const salePrice: string | number = response.data.offers[0].badges.dealBadge?.text ?? '[SALE PRICE WOULD GO HERE]'
            // // const saleUnitPrice
            const price: number = response.data.offers[0].price.value
            const saleType: string | null = response.data.offers[0].badges.dealBadge?.type
            const saleText: string | null = response.data.offers[0].badges.dealBadge?.text ?? null
            let salePrice: number | null = null
            let sale: number | null = null
            let multiQty: number | null = null
            let limitQty: number | null = null

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

            const product = await Product.create({
                productID: response.data.code,
                brandName: response.data.brand ?? '',
                itemName: response.data.name,
                price,
                date: new Date(),
                imageURL: response.data.imageAssets[0].mediumUrl,
                link: `https://www.realcanadiansuperstore.ca${response.data.link}`,
                packageSize: response.data.packageSize,
                uom: response.data.uom,
                onSale: response.data.offers[0].badges.dealBadge ? true : false,
                saleType: response.data.offers[0].badges.dealBadge?.type ?? null,
                saleText: response.data.offers[0].badges.dealBadge?.text ?? null,
                saleEndDate: response.data.offers[0].badges.dealBadge?.expiryDate ?? null,
                salePrice,
                sale,
                multiQty,
                limitQty,
            })
            res.status(200).json(product)

        } catch (err) {
            console.log(err)
            console.log('This item is not currently available')
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
