import express, { Express, Request, Response, Router } from 'express'
const router = express.Router()
import { getTrackers, setTracker, updateTracker, deleteTracker } from '../controllers/trackerController'
import { protect } from '../middleware/authMiddleware'

router.route('/').get(protect, getTrackers).post(protect, setTracker)
router.route('/:id').put(protect, updateTracker).delete(protect, deleteTracker)

module.exports = router