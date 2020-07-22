import express from 'express';
import {
  listProducts,
  getProduct,
  addProduct,
  deleteProduct,
} from '../controllers/products';

const router = express.Router();

// /api/products
router.get('/', listProducts);

// /api/products/:productId
router.get('/:productId', getProduct);

// /api/products
router.post('/', addProduct);

// /api/products/:productId
router.delete('/:productId', deleteProduct);

export default router;
