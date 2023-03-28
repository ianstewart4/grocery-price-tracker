"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const trackerController_1 = require("../controllers/trackerController");
// import TrackerController from '../controllers/trackerController'
router.route('/').get(trackerController_1.getTrackers).post(trackerController_1.setTracker);
router.route('/:id').put(trackerController_1.updateTracker).delete(trackerController_1.deleteTracker);
module.exports = router;
