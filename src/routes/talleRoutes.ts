import { Router } from 'express';
export const router = Router();

import * as talleController from '../controllers/talleController';

router.get('/talles', talleController.getTalles);
router.get('/talles/:id', talleController.getTalle);
router.post('/talles', talleController.createTalle);
router.put('/talles/:id', talleController.updateTalle);
router.delete('/talles/:id', talleController.deleteTalle);
router.patch('/talles/desactivar/:id', talleController.eliminarTalle);

export default router;