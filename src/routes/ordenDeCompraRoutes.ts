import { Router } from 'express';
export const router = Router();
import * as ordenDeCompraController from '../controllers/ordenDeCompraController';

router.get('/ordenesCompra', ordenDeCompraController.getOrdenesDeCompra);
router.get('/ordenesCompra/:id', ordenDeCompraController.getOrdenDeCompra);
router.post('/ordenesCompra', ordenDeCompraController.createOrdenDeCompra);
router.put('/ordenesCompra/:id', ordenDeCompraController.updateOrdenDeCompra);
router.delete('/ordenesCompra/:id', ordenDeCompraController.deleteOrdenDeCompra);

export default router;