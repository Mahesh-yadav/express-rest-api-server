import express from 'express';
import { listProducts, getProduct } from '../controllers/products';

const router = express.Router();

// /api/products
router.get('/', listProducts);

// /api/products/:productId
router.get('/:productId', getProduct);

export default router;
