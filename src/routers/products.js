import express from 'express';
import { listProducts } from '../controllers/products';

const router = express.Router();

// /api/products -> [{},{}, .....]
router.get('/', listProducts);

export default router;
