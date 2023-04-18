"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const trackerController_1 = require("../controllers/trackerController");
const authMiddleware_1 = require("../middleware/authMiddleware");
router.route('/').get(authMiddleware_1.protect, trackerController_1.getPriceHistory).post(authMiddleware_1.protect, trackerController_1.setPriceHistory);
router.route('/:id').put(trackerController_1.updatePriceHistory);
module.exports = router;
