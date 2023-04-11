"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.setProduct = exports.getProducts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const productModel_1 = require("../models/productModel");
const axios_1 = __importDefault(require("axios"));
const dateConstants_1 = require("../constants/dateConstants");
const apiConstants_1 = require("../constants/apiConstants");
// @desc    Get Products
// @route   GET /api/Products
// @access  Private
exports.getProducts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productModel_1.Product.find();
    res.status(200).json(products);
}));
// @desc    Set Products
// @route   POST /api/Products
// @access  Private
exports.setProduct = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (!req.body.productID) {
        res.status(400);
        throw new Error('It is not receiving the productID');
    }
    const { productID } = req.body;
    const existingItem = yield productModel_1.Product.findOne({ productID: productID });
    if (!existingItem || existingItem) { // UPDATE CONDITION ONCE COMPLETE
        const API = `https://api.pcexpress.ca/product-facade/v4/products/${productID}?lang=en&date=${dateConstants_1.ddmmyyyy}&pickupType=STORE&storeId=1514&banner=superstore`;
        try {
            const response = yield axios_1.default.get(API, apiConstants_1.config);
            // const unitSize: number = response.data.offers[0].comparisonPrices[0].quantity // The denominator for the per unit price eg. 100ml
            // const unitPrice: number = Number((price / (pkgSize / unitSize)).toFixed(2))
            // // Need to figure out what kinds of prices go here. It would be ideal to return a number 
            // const salePrice: string | number = response.data.offers[0].badges.dealBadge?.text ?? '[SALE PRICE WOULD GO HERE]'
            // // const saleUnitPrice
            const price = response.data.offers[0].price.value;
            const saleType = (_a = response.data.offers[0].badges.dealBadge) === null || _a === void 0 ? void 0 : _a.type;
            const saleText = (_c = (_b = response.data.offers[0].badges.dealBadge) === null || _b === void 0 ? void 0 : _b.text) !== null && _c !== void 0 ? _c : null;
            let salePrice = null;
            let sale = null;
            let multiQty = null;
            let limitQty = null;
            if (saleType === 'MULTI') {
                multiQty = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(' ')[0]);
                salePrice = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(' ')[2].slice(1)) / multiQty;
                sale = price - salePrice;
            }
            else if (saleType === 'LIMIT') {
                limitQty = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(' ')[2]);
                salePrice = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(' ')[0].slice(1));
                sale = price - salePrice;
            }
            else if (saleType === 'SALE') {
                // @ts-ignore
                sale = Number(saleText.slice(6));
                salePrice = price - sale;
            }
            const product = yield productModel_1.Product.create({
                productID: response.data.code,
                brandName: (_d = response.data.brand) !== null && _d !== void 0 ? _d : '',
                itemName: response.data.name,
                price,
                date: new Date(),
                imageURL: response.data.imageAssets[0].mediumUrl,
                link: `https://www.realcanadiansuperstore.ca${response.data.link}`,
                packageSize: response.data.packageSize,
                uom: response.data.uom,
                onSale: response.data.offers[0].badges.dealBadge ? true : false,
                saleType: (_f = (_e = response.data.offers[0].badges.dealBadge) === null || _e === void 0 ? void 0 : _e.type) !== null && _f !== void 0 ? _f : null,
                saleText: (_h = (_g = response.data.offers[0].badges.dealBadge) === null || _g === void 0 ? void 0 : _g.text) !== null && _h !== void 0 ? _h : null,
                saleEndDate: (_k = (_j = response.data.offers[0].badges.dealBadge) === null || _j === void 0 ? void 0 : _j.expiryDate) !== null && _k !== void 0 ? _k : null,
                salePrice,
                sale,
                multiQty,
                limitQty,
            });
            res.status(200).json(product);
        }
        catch (err) {
            console.log(err);
            console.log('This item is not currently available');
        }
    }
    else {
        res.status(200).json(existingItem);
    }
}));
// @desc    Update Products
// @route   PUT /api/Products/:id
// @access  Private
exports.updateProduct = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: `Update Product ${req.params.id}` });
}));
// @desc    Delete Products
// @route   DELETE /api/Products/:id
// @access  Private
exports.deleteProduct = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: `Delete Product ${req.params.id}` });
}));
