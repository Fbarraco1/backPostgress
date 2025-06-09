import { Router } from 'express';
import {
  getCategoria,
  getCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  eliminarCategoria
} from '../controllers/categoriaController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarAdmin, verificarUsuarioAutenticado } from '../middleware/roleMiddleware';

export const router = Router();

router.get('/categorias',verificarToken, verificarUsuarioAutenticado ,getCategorias);
router.get('/categorias/:id', verificarToken, verificarUsuarioAutenticado, getCategoria);
router.post('/categorias', verificarToken, verificarAdmin,createCategoria);
router.put('/categorias/:id', verificarToken, verificarAdmin,updateCategoria);
router.delete('/categorias/:id', verificarToken, verificarAdmin,deleteCategoria);
router.patch('/categorias/desactivar/:id', verificarToken, verificarAdmin,eliminarCategoria);

export default router;
