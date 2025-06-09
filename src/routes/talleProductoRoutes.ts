import { Router } from 'express';
export const router = Router();

import * as talleProductoController from '../controllers/talleProductoController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';

router.get('/talleProductos', verificarToken, verificarUsuarioAutenticado, talleProductoController.getTalleProductos);
router.get('/talleProductos/:id', verificarToken, verificarUsuarioAutenticado, talleProductoController.getTalleProducto);
router.post('/talleProductos', verificarToken, verificarAdmin, talleProductoController.createTalleProducto);
router.put('/talleProductos/:id', verificarToken, verificarAdmin, talleProductoController.updateTalleProducto);
router.delete('/talleProductos/:id',verificarToken, verificarAdmin, talleProductoController.deleteTalleProducto);
router.patch('/talleProductos/desactivar/:id', verificarToken, verificarAdmin,talleProductoController.eliminarTalleProducto);

export default router;