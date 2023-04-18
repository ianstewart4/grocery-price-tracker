import asyncHandler from "express-async-handler"
import { Request, Response } from 'express'
import { Tracker } from '../models/trackerModel'


// @desc    Get Trackers
// @route   GET /api/Trackers
// @access  Private

export const getTrackers = asyncHandler(async (req: Request, res: Response) => {
    const trackers = await Tracker.find({ user: req.user.id })
    if (!trackers) {
        res.status(400).json({ message: 'This user has no trackers' })
    }
    res.status(200).json(trackers)
})

// @desc    Set Tracker
// @route   POST /api/Trackers
// @access  Private

export const setTracker = asyncHandler(async (req: Request, res: Response) => {
    const user = req.user.id
    const { productID } = req.body
    // const alertActive = true


    const tracker = await Tracker.create({
        user,
        productID,
        // alertActive,
    })

})

// @desc    Update Trackers
// @route   PUT /api/Trackers/:id
// @access  Private

export const updateTracker = asyncHandler(async (req: Request, res: Response) => {
    // Update alertActive??
})

// @desc    Delete Tracker
// @route   DELETE /api/Trackers/:id
// @access  Private

export const deleteTracker = asyncHandler(async (req: Request, res: Response) => {
    const tracker = await Tracker.findById(req.params.id)

    if (!tracker) {
        res.status(400)
        throw new Error('Tracker not found')
    }

    await tracker.deleteOne()

    res.json({ message: `Deleted Tracker ${req.params.id}` })
})
