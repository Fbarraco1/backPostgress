import { Router } from 'express';
import * as direccionController from '../controllers/direccionController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';
export const router = Router();

router.get('/direcciones', verificarToken, verificarUsuarioAutenticado,direccionController.getDirecciones);
router.get('/direcciones/:id', verificarToken,verificarUsuarioAutenticado, direccionController.getDireccion);
router.post('/direcciones', verificarToken, verificarAdmin, direccionController.createDireccion);
router.put('/direcciones/:id', verificarToken, verificarAdmin, direccionController.updateDireccion);
router.delete('/direcciones/:id', verificarToken, verificarAdmin, direccionController.deleteDireccion);
router.patch('/direcciones/desactivar/:id', verificarToken, verificarAdmin, direccionController.eliminarDireccion);

export default router;