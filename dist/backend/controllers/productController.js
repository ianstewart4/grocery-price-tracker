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
    const products = yield productModel_1.Product.find({ productID: req.body.productID });
    res.status(200).json(products);
}));
// @desc    Set Product
// @route   POST /api/Products
// @access  Private
exports.setProduct = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    if (!req.body.productID) {
        res.status(400);
        throw new Error("Please enter a productID");
    }
    const { productID } = req.body;
    // const existingItem = await Product.findOne({ productID: productID });
    // if (!existingItem) {
    const API = `https://api.pcexpress.ca/product-facade/v4/products/${productID}?lang=en&date=${dateConstants_1.ddmmyyyy}&pickupType=STORE&storeId=1514&banner=superstore`;
    try {
        const response = yield axios_1.default.get(API, apiConstants_1.config);
        // PRODUCT INFO
        const productID = response.data.code;
        const brandName = (_a = response.data.brand) !== null && _a !== void 0 ? _a : "";
        const itemName = response.data.name;
        const date = new Date();
        const imageURL = response.data.imageAssets[0].largeUrl;
        const link = `https://www.realcanadiansuperstore.ca${response.data.link}`;
        let price = response.data.offers[0].price.value;
        // PACKAGE INFO
        const packageSizeText = response.data.packageSize;
        const packageSizeNum = Number(packageSizeText.split(" ")[0]);
        const packageUnits = packageSizeText.split(" ")[1];
        const uom = response.data.uom;
        // COMPARISON INFO
        // WILL THEY ALWAYS HAVE THIS? A: Won't always be correct
        // TODO: Fix this so it gives accurate data
        const compQty = response.data.offers[0].comparisonPrices[0].quantity;
        const divisor = packageSizeNum / compQty;
        // SALE INFO
        const onSale = response.data.offers[0].badges.dealBadge
            ? true
            : false;
        const saleEndDate = (_c = (_b = response.data.offers[0].badges.dealBadge) === null || _b === void 0 ? void 0 : _b.expiryDate) !== null && _c !== void 0 ? _c : null;
        const saleType = (_d = response.data.offers[0].badges.dealBadge) === null || _d === void 0 ? void 0 : _d.type;
        const saleText = (_f = (_e = response.data.offers[0].badges.dealBadge) === null || _e === void 0 ? void 0 : _e.text) !== null && _f !== void 0 ? _f : null;
        let salePrice = null;
        let saleValue = null;
        let multiQty = null;
        let limitQty = null;
        // SALE INFO BY SALE TYPE
        if (saleType === "MULTI") {
            multiQty = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(" ")[0]);
            salePrice = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(" ")[2].slice(1)) / multiQty;
            saleValue = price - salePrice;
        }
        else if (saleType === "LIMIT") {
            limitQty = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(" ")[2]);
            salePrice = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(" ")[0].slice(1));
            saleValue = price - salePrice;
        }
        else if (saleType === "SALE") {
            // @ts-ignore
            saleValue = Number(saleText.slice(6));
            salePrice = price;
            price = price + saleValue;
        }
        const currentPrice = salePrice !== null && salePrice !== void 0 ? salePrice : price;
        // TODO: Fix this so it gives accurate data
        const saleUnitPrice = salePrice ? salePrice / divisor : null;
        const unitPrice = price / divisor;
        // I think this should go in the priceHistory controller but need to ensure it's called at the same time as this...
        // const priceHistory: IPriceHistory = await PriceHistory.create({
        //     productID,
        //     date,
        //     currentPrice,
        // })
        const product = yield productModel_1.Product.create({
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
        });
        console.log("Getting product details");
        res.status(200).json(product);
    }
    catch (err) {
        console.log(err);
        console.log("This code is invalid or item is not currently available at this location");
    }
    // } else {
    //   console.log("This product already exists!!!!");
    //   res.status(200).json(existingItem);
    // }
}));
// @desc    Update Products
// @route   PUT /api/Products/:id
// @access  Private
exports.updateProduct = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h, _j, _k, _l, _m;
    const product = yield productModel_1.Product.findById(req.params.id);
    if (!product) {
        res.status(400);
        throw new Error("Product not found");
    }
    const productID = product.productID;
    const API = `https://api.pcexpress.ca/product-facade/v4/products/${productID}?lang=en&date=${dateConstants_1.ddmmyyyy}&pickupType=STORE&storeId=1514&banner=superstore`;
    try {
        const response = yield axios_1.default.get(API, apiConstants_1.config);
        // PRODUCT INFO
        const productID = response.data.code;
        const brandName = (_g = response.data.brand) !== null && _g !== void 0 ? _g : "";
        const itemName = response.data.name;
        const date = new Date();
        const imageURL = response.data.imageAssets[0].mediumUrl;
        const link = `https://www.realcanadiansuperstore.ca${response.data.link}`;
        const price = response.data.offers[0].price.value;
        // PACKAGE INFO
        const packageSizeText = response.data.packageSize;
        const packageSizeNum = Number(packageSizeText.split(" ")[0]);
        const packageUnits = packageSizeText.split(" ")[1];
        const uom = response.data.uom;
        // COMPARISON INFO
        const compQty = response.data.offers[0].comparisonPrices[0].quantity; // WILL THEY ALWAYS HAVE THIS?
        const divisor = packageSizeNum / compQty;
        const unitPrice = price / divisor;
        // SALE INFO
        const onSale = response.data.offers[0].badges.dealBadge
            ? true
            : false;
        const saleEndDate = (_j = (_h = response.data.offers[0].badges.dealBadge) === null || _h === void 0 ? void 0 : _h.expiryDate) !== null && _j !== void 0 ? _j : null;
        const saleType = (_k = response.data.offers[0].badges.dealBadge) === null || _k === void 0 ? void 0 : _k.type;
        const saleText = (_m = (_l = response.data.offers[0].badges.dealBadge) === null || _l === void 0 ? void 0 : _l.text) !== null && _m !== void 0 ? _m : null;
        let salePrice = null;
        let saleValue = null;
        let multiQty = null;
        let limitQty = null;
        if (saleType === "MULTI") {
            multiQty = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(" ")[0]);
            salePrice = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(" ")[2].slice(1)) / multiQty;
            saleValue = price - salePrice;
        }
        else if (saleType === "LIMIT") {
            limitQty = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(" ")[2]);
            salePrice = Number(saleText === null || saleText === void 0 ? void 0 : saleText.split(" ")[0].slice(1));
            saleValue = price - salePrice;
        }
        else if (saleType === "SALE") {
            // @ts-ignore
            saleValue = Number(saleText.slice(6));
            salePrice = price - saleValue;
        }
        const saleUnitPrice = salePrice
            ? salePrice / divisor
            : null;
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
        };
        try {
            // // Check if price or onSale has changed
            // if (product.onSale !== onSale || product.price !== price) {
            //     // If yes, add new priceHistory price and date
            // } else {
            //     // If no, update priceHistory date
            //     const updatedPriceHistory = await PriceHistory.findByIdAndUpdate(req.params.id, { })
            // }
            const updatedProduct = yield productModel_1.Product.findByIdAndUpdate(req.params.id, productDetails);
            console.log(typeof updatedProduct);
            console.log("Updating product");
            res.status(200).json(updatedProduct);
        }
        catch (err) {
            res.status(400).json({ message: "Failed to complete request" });
            throw new Error("Failed to complete request");
        }
    }
    catch (err) {
        console.log(err);
        console.log("This item is not currently available at this location");
    }
}));
// @desc    Delete Products
// @route   DELETE /api/Products/:id
// @access  Private
exports.deleteProduct = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productModel_1.Product.findById(req.params.id);
    if (!product) {
        res.status(400);
        throw new Error("Product not found");
    }
    yield product.deleteOne();
    res.json({ message: `Deleted Product ${req.params.id}` });
}));
