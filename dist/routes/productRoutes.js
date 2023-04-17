"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productController_1 = require("../controllers/productController");
const authMiddleware_1 = require("../middleware/authMiddleware");
router.route('/').get(authMiddleware_1.protect, productController_1.getProducts).post(authMiddleware_1.protect, productController_1.setProduct);
router.route('/:id').put(authMiddleware_1.protect, productController_1.updateProduct).delete(authMiddleware_1.protect, productController_1.deleteProduct);
module.exports = router;
