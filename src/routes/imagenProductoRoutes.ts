import { Router } from 'express';

import * as imagenProductoController from '../controllers/imagenProductoController';

export const router = Router();

router.get('/imagenProducto', imagenProductoController.getImagenesProducto)
router.get('/imagenProducto/:id', imagenProductoController.getImagenProducto)
router.post('/imagenProducto', imagenProductoController.createImagenProducto)
router.put('/imagenProducto/:id', imagenProductoController.updateImagenProducto)
router.delete('/imagenProducto/:id', imagenProductoController.deleteImagenProducto)

export default router;

