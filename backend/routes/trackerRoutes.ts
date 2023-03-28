import express, { Express, Request, Response, Router } from 'express'
const router = express.Router()
import { getTrackers, setTracker, updateTracker, deleteTracker } from '../controllers/trackerController'
// import TrackerController from '../controllers/trackerController'

router.route('/').get(getTrackers).post(setTracker)
router.route('/:id').put(updateTracker).delete(deleteTracker)

module.exports = router
