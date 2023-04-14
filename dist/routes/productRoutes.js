"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productController_1 = require("../controllers/productController");
router.route('/').get(productController_1.getProducts).post(productController_1.setProduct);
router.route('/:id').put(productController_1.updateProduct).delete(productController_1.deleteProduct);
module.exports = router;
