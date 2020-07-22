import express from 'express';
import { listProducts, getProduct, addProduct } from '../controllers/products';

const router = express.Router();

// /api/products
router.get('/', listProducts);

// /api/products/:productId
router.get('/:productId', getProduct);

// /api/products
router.post('/', addProduct);

export default router;
