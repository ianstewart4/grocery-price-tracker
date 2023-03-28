import asyncHandler from "express-async-handler"
import { Request, Response } from 'express'
// @desc    Get trackers
// @route   GET /api/trackers
// @access  Private

export const getTrackers = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: 'Winning!!!' })
})

// @desc    Set trackers
// @route   POST /api/trackers
// @access  Private

export const setTracker = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'SETTING!!!' })
})

// @desc    Update trackers
// @route   PUT /api/trackers/:id
// @access  Private

export const updateTracker = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: `Update tracker ${req.params.id}` })
})

// @desc    Delete trackers
// @route   DELETE /api/trackers/:id
// @access  Private

export const deleteTracker = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: `Delete tracker ${req.params.id}` })
})

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