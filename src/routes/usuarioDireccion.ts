import { Router } from 'express';
export const router = Router();

import * as usuarioDireccionController from '../controllers/usuarioDireccionController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';

router.get('/usuarioDirecciones', verificarToken, verificarUsuarioAutenticado,usuarioDireccionController.getUsuarioDirecciones);
router.get('/usuarioDirecciones/:id', verificarToken, verificarUsuarioAutenticado,usuarioDireccionController.getUsuarioDireccion);
router.post('/usuarioDirecciones', verificarToken, verificarAdmin,usuarioDireccionController.createUsuarioDireccion);
router.put('/usuarioDirecciones/:id', verificarToken, verificarAdmin,usuarioDireccionController.updateUsuarioDireccion);
router.delete('/usuarioDirecciones/:id', verificarToken, verificarAdmin,usuarioDireccionController.deleteUsuarioDireccion);
router.patch('/usuarioDirecciones/desactivar/:id',verificarToken, verificarAdmin,usuarioDireccionController.eliminarUsuarioDireccion);

export default router;