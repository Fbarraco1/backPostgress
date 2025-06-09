import { Router } from 'express';

import * as imagenProductoController from '../controllers/imagenProductoController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';
export const router = Router();

router.get('/imagenProducto', verificarToken, verificarUsuarioAutenticado, imagenProductoController.getImagenesProducto)
router.get('/imagenProducto/:id', verificarToken, verificarUsuarioAutenticado, imagenProductoController.getImagenProducto)
router.post('/imagenProducto', verificarToken, verificarAdmin, imagenProductoController.createImagenProducto)
router.put('/imagenProducto/:id', verificarToken, verificarAdmin, imagenProductoController.updateImagenProducto)
router.delete('/imagenProducto/:id', verificarToken, verificarAdmin, imagenProductoController.deleteImagenProducto)
router.patch('/imagenProducto/desactivar/:id', verificarToken, verificarAdmin, imagenProductoController.eliminarImagenProducto)

export default router;

