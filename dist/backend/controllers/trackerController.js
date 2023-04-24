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
exports.deleteTracker = exports.updateTracker = exports.setTracker = exports.getTrackers = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const trackerModel_1 = require("../models/trackerModel");
// @desc    Get Trackers
// @route   GET /api/Trackers
// @access  Private
exports.getTrackers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore will have to figure out a later date. Won't break
    const trackers = yield trackerModel_1.Tracker.find({ user: req.user.id });
    if (!trackers) {
        res.status(400).json({ message: "This user has no trackers" });
    }
    res.status(200).json(trackers);
}));
// @desc    Set Tracker
// @route   POST /api/Trackers
// @access  Private
exports.setTracker = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore will have to figure out a later date. Won't break
    const user = req.user.id;
    const { productID } = req.body;
    // const alertActive = true
    if (!productID) {
        res.status(400);
        throw new Error("Please enter a productID");
    }
    const existingTracker = yield trackerModel_1.Tracker.findOne({ user, productID });
    if (!existingTracker) {
        try {
            const tracker = yield trackerModel_1.Tracker.create({
                user,
                productID,
                // alertActive,
            });
            console.log("Adding new tracker");
            res.status(200).json(tracker);
        }
        catch (err) {
            console.log(err);
            console.log("Something went wrong");
        }
    }
    else {
        console.log("This user is already tracking this item");
        res
            .status(200)
            .json({ message: "This user is already tracking this item" });
    }
}));
// @desc    Update Trackers
// @route   PUT /api/Trackers/:id
// @access  Private
exports.updateTracker = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tracker = yield trackerModel_1.Tracker.findById(req.params.id);
    if (!tracker) {
        res.status(400);
        throw new Error("Tracker not found");
    }
    // @ts-ignore will have to figure out a later date. Won't break
    // const user = await User.findById(req.user.id);
    // Check for user
    if (!req.user.id) {
        res.status(401);
        throw new Error("User not found");
    }
    // Make sure the logged in user matches the tracker user
    if (tracker.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    // Update alertActive??
}));
// @desc    Delete Tracker
// @route   DELETE /api/Trackers/:id
// @access  Private
exports.deleteTracker = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tracker = yield trackerModel_1.Tracker.findById(req.params.id);
    if (!tracker) {
        res.status(400);
        throw new Error("Tracker not found");
    }
    // @ts-ignore will have to figure out a later date. Won't break
    // const user = await User.findById(req.user.id);
    // Check for user
    if (!req.user.id) {
        res.status(401);
        throw new Error("User not found");
    }
    // Make sure the logged in user matches the tracker user
    if (tracker.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    yield tracker.deleteOne();
    res.json({ message: `Deleted Tracker ${req.params.id}` });
}));
