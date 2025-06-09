import { Router } from 'express';
export const router = Router();

import * as usuarioController from '../controllers/usuarioController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';

router.get('/usuarios', verificarToken, verificarUsuarioAutenticado,usuarioController.getUsuarios);
router.get('/usuarios/:id', verificarToken, verificarUsuarioAutenticado,usuarioController.getUsuario);
router.post('/usuarios', verificarToken, verificarAdmin, usuarioController.createUsuario);
router.put('/usuarios/:id', verificarToken, verificarAdmin, usuarioController.updateUsuario);
router.delete('/usuarios/:id',verificarToken, verificarAdmin, usuarioController.deleteUsuario);
router.patch('/usuarios/desactivar/:id',verificarToken, verificarAdmin,usuarioController.eliminarUsuario);

export default router;