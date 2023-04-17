import express, { Express, Request, Response, Router } from 'express'
const router = express.Router()
import { registerUser, loginUser, getMe } from '../controllers/userController'
import { protect } from '../middleware/authMiddleware'

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router