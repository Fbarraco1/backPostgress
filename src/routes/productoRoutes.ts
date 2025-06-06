import { Router } from 'express';
export const router = Router();
import * as productoController from '../controllers/productoController';

router.get('/productos', productoController.getProductos);
router.get('/productos/:id', productoController.getProducto);
router.post('/productos', productoController.createProducto);
router.put('/productos/:id', productoController.updateProducto);
router.delete('/productos/:id', productoController.deleteProducto);
router.patch('/productos/desactivar/:id', productoController.eliminarProducto);

export default router;