import { Router } from 'express';
import * as tipoController from '../controllers/tipoController';

const router = Router();
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';

router.get('/tipos', verificarToken,verificarUsuarioAutenticado,tipoController.getTipos);
router.get('/tipos/:id', verificarToken,verificarUsuarioAutenticado,tipoController.getTipo);
router.post('/tipos', verificarToken,verificarAdmin,tipoController.createTipo);
router.put('/tipos/:id', verificarToken,verificarAdmin,tipoController.updateTipo);
router.delete('/tipos/:id', verificarToken,verificarAdmin,tipoController.deleteTipo);
router.patch('/tipos/desactivar/:id', verificarToken,verificarAdmin,tipoController.eliminarTipo);

export default router;