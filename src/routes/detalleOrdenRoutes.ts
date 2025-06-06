import { Router } from 'express';

import * as detalleOrdenController from '../controllers/detalleOrdenController';
export const router = Router();

router.get('/detalleOrdenes', detalleOrdenController.getDetalleOrdenes);
router.get('/detalleOrdenes/:id', detalleOrdenController.getDetalleOrden);
router.post('/detalleOrdenes', detalleOrdenController.createDetalleOrden);
router.put('/detalleOrdenes/:id', detalleOrdenController.updateDetalleOrden);
router.delete('/detalleOrdenes/:id', detalleOrdenController.deleteDetalleOrden);
router.patch('/detalleOrdenes/desactivar/:id', detalleOrdenController.eliminarDetalleOrden);


export default router;