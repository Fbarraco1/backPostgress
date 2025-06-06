import { Router } from 'express';
import {
  getCategoria,
  getCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  eliminarCategoria
} from '../controllers/categoriaController';

export const router = Router();

router.get('/categorias', getCategorias);
router.get('/categorias/:id', getCategoria);
router.post('/categorias', createCategoria);
router.put('/categorias/:id', updateCategoria);
router.delete('/categorias/:id', deleteCategoria);
router.patch('/categorias/desactivar/:id', eliminarCategoria);

export default router;
