import { Router } from 'express';
export const router = Router();

import * as talleProductoController from '../controllers/talleProductoController';

router.get('/talleProductos', talleProductoController.getTalleProductos);
router.get('/talleProductos/:id', talleProductoController.getTalleProducto);
router.post('/talleProductos', talleProductoController.createTalleProducto);
router.put('/talleProductos/:id', talleProductoController.updateTalleProducto);
router.delete('/talleProductos/:id', talleProductoController.deleteTalleProducto);
router.patch('/talleProductos/desactivar/:id', talleProductoController.eliminarTalleProducto);

export default router;