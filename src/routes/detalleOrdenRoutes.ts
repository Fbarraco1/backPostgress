import { Router } from 'express';

import * as detalleOrdenController from '../controllers/detalleOrdenController';
export const router = Router();

router.get('/detalleOrdenes', detalleOrdenController.getDetalleOrdenes);
router.get('/detalleOrdenes/:id', detalleOrdenController.getDetalleOrden);
router.post('/detalleOrdenes', detalleOrdenController.createDetalleOrden);
router.put('/detalleOrdenes/:id', detalleOrdenController.updateDetalleOrden);
router.delete('/detalleOrdenes/:id', detalleOrdenController.deleteDetalleOrden);

export default router;