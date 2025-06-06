import { Router } from 'express';
import * as direccionController from '../controllers/direccionController';

export const router = Router();

router.get('/direcciones', direccionController.getDirecciones);
router.get('/direcciones/:id', direccionController.getDireccion);
router.post('/direcciones', direccionController.createDireccion);
router.put('/direcciones/:id', direccionController.updateDireccion);
router.delete('/direcciones/:id', direccionController.deleteDireccion);
router.patch('/direcciones/desactivar/:id', direccionController.eliminarDireccion);

export default router;