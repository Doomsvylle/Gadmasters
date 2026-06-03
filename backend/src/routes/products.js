import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = Router();

router.get('/',      getProducts);
router.get('/:id',   getProductById);
router.post('/',     createProduct);   // TODO: proteger con auth middleware
router.put('/:id',   updateProduct);   // TODO: proteger con auth middleware
router.delete('/:id',deleteProduct);   // TODO: proteger con auth middleware

export default router;
