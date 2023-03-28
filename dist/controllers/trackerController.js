"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTracker = exports.updateTracker = exports.setTracker = exports.getTrackers = void 0;
// @desc    Get trackers
// @route   GET /api/trackers
// @access  Private
const getTrackers = (req, res) => {
    res.json({ message: 'Winning!!!' });
};
exports.getTrackers = getTrackers;
// @desc    Set trackers
// @route   POST /api/trackers
// @access  Private
const setTracker = (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }
    res.status(200).json({ message: 'SETTING!!!' });
};
exports.setTracker = setTracker;
// @desc    Update trackers
// @route   PUT /api/trackers/:id
// @access  Private
const updateTracker = (req, res) => {
    res.json({ message: `Update tracker ${req.params.id}` });
};
exports.updateTracker = updateTracker;
// @desc    Delete trackers
// @route   DELETE /api/trackers/:id
// @access  Private
const deleteTracker = (req, res) => {
    res.json({ message: `Delete tracker ${req.params.id}` });
};
exports.deleteTracker = deleteTracker;
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
