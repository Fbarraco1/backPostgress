import { Router } from 'express';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';
import * as detalleOrdenController from '../controllers/detalleOrdenController';
export const router = Router();

router.get('/detalleOrdenes', verificarToken, verificarUsuarioAutenticado, detalleOrdenController.getDetalleOrdenes);
router.get('/detalleOrdenes/:id', verificarToken, verificarUsuarioAutenticado, detalleOrdenController.getDetalleOrden);
router.post('/detalleOrdenes', verificarToken, verificarAdmin,detalleOrdenController.createDetalleOrden);
router.put('/detalleOrdenes/:id', verificarToken, verificarAdmin, detalleOrdenController.updateDetalleOrden);
router.delete('/detalleOrdenes/:id', verificarToken, verificarAdmin, detalleOrdenController.deleteDetalleOrden);
router.patch('/detalleOrdenes/desactivar/:id', verificarToken, verificarAdmin, detalleOrdenController.eliminarDetalleOrden);


export default router;