import { Router } from 'express';
import * as tipoController from '../controllers/tipoController';

const router = Router();

router.get('/tipos', tipoController.getTipos);
router.get('/tipos/:id', tipoController.getTipo);
router.post('/tipos', tipoController.createTipo);
router.put('/tipos/:id', tipoController.updateTipo);
router.delete('/tipos/:id', tipoController.deleteTipo);
router.patch('/tipos/desactivar/:id', tipoController.eliminarTipo);

export default router;