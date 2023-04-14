import express, { Express, Request, Response, Router } from 'express'
const router = express.Router()
import { registerUser, loginUser, getMe } from '../controllers/userController'

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router