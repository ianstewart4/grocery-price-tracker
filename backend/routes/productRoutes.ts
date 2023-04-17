import express, { Express, Request, Response, Router } from 'express'
const router = express.Router()
import { getProducts, setProduct, updateProduct, deleteProduct } from '../controllers/productController'
import { protect } from '../middleware/authMiddleware'

router.route('/').get(protect, getProducts).post(protect, setProduct)
router.route('/:id').put(protect, updateProduct).delete(protect, deleteProduct)

module.exports = router
