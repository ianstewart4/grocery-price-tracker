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
// @desc    Get trackers
// @route   GET /api/trackers
// @access  Private
exports.getTrackers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'Winning!!!' });
}));
// @desc    Set trackers
// @route   POST /api/trackers
// @access  Private
exports.setTracker = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }
    res.status(200).json({ message: 'SETTING!!!' });
}));
// @desc    Update trackers
// @route   PUT /api/trackers/:id
// @access  Private
exports.updateTracker = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: `Update tracker ${req.params.id}` });
}));
// @desc    Delete trackers
// @route   DELETE /api/trackers/:id
// @access  Private
exports.deleteTracker = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: `Delete tracker ${req.params.id}` });
}));
// class TrackerController {
//     // @desc    Get trackers
//     // @route   GET /api/trackers
//     // @access  Private
//     public async getTrackers(req: Request, res: Response): Promise<void> {
//         res.json({ message: 'Winning!!!' })
//     }
//     // @desc    Set trackers
//     // @route   POST /api/trackers
//     // @access  Private
//     public async setTracker(req: Request, res: Response): Promise<void> {
//         console.log(req.body)
//         res.json({ message: 'SETTING!!!' })
//     }
//     // @desc    Update trackers
//     // @route   PUT /api/trackers/:id
//     // @access  Private
//     public async updateTracker(req: Request, res: Response): Promise<void> {
//         res.json({ message: `Update tracker ${req.params.id}` })
//     }
//     // @desc    Delete trackers
//     // @route   DELETE /api/trackers/:id
//     // @access  Private
//     public async deleteTracker(req: Request, res: Response): Promise<void> {
//         res.json({ message: `Delete tracker ${req.params.id}` })
//     }
// }
// export default TrackerController
