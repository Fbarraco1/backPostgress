import { Router } from 'express';
export const router = Router();
import * as ordenDeCompraController from '../controllers/ordenDeCompraController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';

router.get('/ordenesCompra', verificarToken, verificarUsuarioAutenticado, ordenDeCompraController.getOrdenesDeCompra);
router.get('/ordenesCompra/:id', verificarToken, verificarUsuarioAutenticado, ordenDeCompraController.getOrdenDeCompra);
router.post('/ordenesCompra', verificarToken, verificarAdmin, ordenDeCompraController.createOrdenDeCompra);
router.put('/ordenesCompra/:id', verificarToken, verificarAdmin,ordenDeCompraController.updateOrdenDeCompra);
router.delete('/ordenesCompra/:id', verificarToken, verificarAdmin, ordenDeCompraController.deleteOrdenDeCompra);
router.patch('/ordenesCompra/desactivar/:id', verificarToken, verificarAdmin, ordenDeCompraController.eliminarOrdenDeCompra);

export default router;