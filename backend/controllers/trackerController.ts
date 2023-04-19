import asyncHandler from "express-async-handler"
import { Request, Response } from 'express'
import { Tracker } from '../models/trackerModel'
import { User } from "../models/userModel"


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
    if (!productID) {
        res.status(400)
        throw new Error('Please enter a productID')
    }
    const existingTracker = await Tracker.findOne({ user, productID })
    if (!existingTracker) {
        try {
            const tracker = await Tracker.create({
                user,
                productID,
                // alertActive,
            })
            console.log('Adding new tracker')
            res.status(200).json(tracker)
        } catch (err) {
            console.log(err)
            console.log('Something went wrong')
        }
    } else {
        console.log('This user is already tracking this item')
        res.status(200).json({ message: 'This user is already tracking this item' })
    }



})

// @desc    Update Trackers
// @route   PUT /api/Trackers/:id
// @access  Private

export const updateTracker = asyncHandler(async (req: Request, res: Response) => {

    const tracker = await Tracker.findById(req.params.id)

    if (!tracker) {
        res.status(400)
        throw new Error('Tracker not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the tracker user
    if (tracker.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

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

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the tracker user
    if (tracker.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await tracker.deleteOne()

    res.json({ message: `Deleted Tracker ${req.params.id}` })
})
