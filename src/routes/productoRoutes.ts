import { Router } from 'express';
export const router = Router();
import * as productoController from '../controllers/productoController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';

router.get('/productos', verificarToken, verificarUsuarioAutenticado, productoController.getProductos);
router.get('/productos/:id',verificarToken, verificarUsuarioAutenticado, productoController.getProducto);
router.post('/productos', verificarToken, verificarAdmin, productoController.createProducto);
router.put('/productos/:id', verificarToken, verificarAdmin, productoController.updateProducto);
router.delete('/productos/:id', verificarToken, verificarAdmin, productoController.deleteProducto);
router.patch('/productos/desactivar/:id', verificarToken, verificarAdmin, productoController.eliminarProducto);

export default router;