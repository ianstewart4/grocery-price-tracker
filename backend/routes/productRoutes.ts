import express, { Express, Request, Response, Router } from 'express'
const router = express.Router()
import { getProducts, setProduct, updateProduct, deleteProduct } from '../controllers/productController'

router.route('/').get(getProducts).post(setProduct)
router.route('/:id').put(updateProduct).delete(deleteProduct)

module.exports = router
