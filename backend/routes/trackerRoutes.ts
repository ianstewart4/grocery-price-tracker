import express, { Express, Request, Response, Router } from 'express'
const router = express.Router()
import { getTrackers, setTracker, updateTracker, deleteTracker } from '../controllers/trackerController'



router.get('/', getTrackers)

router.post('/', setTracker)

router.put('/:id', updateTracker)

router.delete('/:id', deleteTracker)

module.exports = router
