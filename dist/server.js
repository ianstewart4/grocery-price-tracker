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
const dotenv_1 = __importDefault(require("dotenv"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
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
    var _a;
    const API = `https://api.pcexpress.ca/product-facade/v4/products/${item}?lang=en&date=${formattedToday}&pickupType=STORE&storeId=1514&banner=superstore`;
    try {
        const response = yield axios_1.default.get(API, config);
        const itemImageURL = response.data.imageAssets[0].mediumUrl;
        const brand = response.data.brand;
        const name = response.data.name;
        const pkgSize = response.data.packageSize;
        const price = response.data.offers[0].price.value;
        // const regPrice: number = response.data.offers[0].wasPrice.value ?? price
        console.log(`\n${item} \n${brand} ${name} (${pkgSize})`);
        console.log(price);
        // console.log(regPrice)
        console.log(response.data.offers[0].badges.dealBadge ? response.data.offers[0].badges.dealBadge.text : 'No Sale');
        console.log(response.data.offers[0].badges.dealBadge ? (_a = response.data.offers[0].badges.dealBadge.expiryDate) !== null && _a !== void 0 ? _a : 'No Expiry' : '');
    }
    catch (err) {
        console.log(err);
    }
});
const items = [
    '20967759_EA',
    '21184617_EA',
    '20971511_EA',
    '20148240_EA', // Meatballs
];
// items.map((item) => {
//     fetchItems(item)
// })
