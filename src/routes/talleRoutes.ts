import { Router } from 'express';
export const router = Router();

import * as talleController from '../controllers/talleController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';

router.get('/talles', verificarToken, verificarUsuarioAutenticado,talleController.getTalles);
router.get('/talles/:id', verificarToken, verificarUsuarioAutenticado, talleController.getTalle);
router.post('/talles', verificarToken, verificarAdmin, talleController.createTalle);
router.put('/talles/:id', verificarToken,verificarAdmin, talleController.updateTalle);
router.put('/talles/:id', verificarToken,verificarAdmin, talleController.updateTalle);
router.delete('/talles/:id',verificarToken,verificarAdmin, talleController.deleteTalle);
router.patch('/talles/desactivar/:id',verificarToken,verificarAdmin, talleController.eliminarTalle);

export default router;