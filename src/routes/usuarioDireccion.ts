import { Router } from 'express';
export const router = Router();

import * as usuarioDireccionController from '../controllers/usuarioDireccionController';

router.get('/usuarioDirecciones', usuarioDireccionController.getUsuarioDirecciones);
router.get('/usuarioDirecciones/:id', usuarioDireccionController.getUsuarioDireccion);
router.post('/usuarioDirecciones', usuarioDireccionController.createUsuarioDireccion);
router.put('/usuarioDirecciones/:id', usuarioDireccionController.updateUsuarioDireccion);
router.delete('/usuarioDirecciones/:id', usuarioDireccionController.deleteUsuarioDireccion);

export default router;