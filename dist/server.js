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
const express_1 = __importDefault(require("express"));
const colors = require('colors');
const dotenv_1 = __importDefault(require("dotenv"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const db_1 = require("./config/db");
(0, db_1.connectDB)();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/trackers', require('./routes/trackerRoutes'));
app.use(errorMiddleware_1.errorHandler);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
const config = {
    headers: {
        'x-apikey': process.env.API_KEY,
    },
};
// Getting DDMMYYY formatted date for API requirement
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
if (dd < 10)
    dd = '0' + dd;
if (mm < 10)
    mm = '0' + mm;
const formattedToday = dd + mm + yyyy;
// console.log(formattedToday)
// Types of sales to consider
// On sale
// 2 for x
// limit
const fetchItems = (item) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const API = `https://api.pcexpress.ca/product-facade/v4/products/${item}?lang=en&date=${formattedToday}&pickupType=STORE&storeId=1514&banner=superstore`;
    try {
        const response = yield axios_1.default.get(API, config);
        const itemImageURL = response.data.imageAssets[0].mediumUrl;
        const brand = (_a = response.data.brand) !== null && _a !== void 0 ? _a : '';
        const name = response.data.name;
        const link = `https://www.realcanadiansuperstore.ca/${response.data.link}`;
        const pkgSize = Number(response.data.packageSize.split(' ')[0]);
        const uom = response.data.uom;
        const itemCode = response.data.code;
        const price = response.data.offers[0].price.value;
        const unitSize = response.data.offers[0].comparisonPrices[0].quantity; // The denominator for the per unit price eg. 100ml
        const unitPrice = price / (pkgSize / unitSize);
        // const salePrice //
        // const saleUnitPrice
        // const saleEndDate
        // const regPrice: number = response.data.offers[0].wasPrice.value ?? price
        console.log(`\n${brand} ${name} (${pkgSize})`);
        console.log(unitSize);
        console.log(unitPrice);
        // console.log(regPrice)
        console.log(response.data.offers[0].badges.dealBadge ? response.data.offers[0].badges.dealBadge.text : 'No Sale');
        console.log(response.data.offers[0].badges.dealBadge ? (_b = response.data.offers[0].badges.dealBadge.expiryDate) !== null && _b !== void 0 ? _b : 'No Expiry' : '');
    }
    catch (err) {
        console.log(err);
    }
});
const items = [
    '20967759_EA',
    // '21184617_EA',
    // '20971511_EA', // Pizza
    // '20148240_EA', // Meatballs
    '20116186001_KG',
    '21194363_EA', // Tea
];
items.map((item) => {
    fetchItems(item);
});
