import { Request, Response } from 'express';
import * as talleProductoService from '../services/talleProductoService';

export const getTalleProductos = async (_req: Request, res: Response) => {
  const talles = await talleProductoService.getAllTalleProductos();
  res.json(talles);
};

export const getTalleProducto = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const talle = await talleProductoService.getTalleProductoById(id);

  if (!talle) {
    return res.status(404).json({ message: 'TalleProducto no encontrado' });
  }

  return res.json(talle);
};

export const createTalleProducto = async (req: Request, res: Response) => {
  try {
    const nuevoTalle = await talleProductoService.createTalleProducto(req.body);
    res.status(201).json(nuevoTalle);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTalleProducto = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const talleActualizado = await talleProductoService.updateTalleProducto(id, req.body);
    return res.json(talleActualizado);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteTalleProducto = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await talleProductoService.deleteTalleProducto(id);
    return res.status(204).send();
  } catch (error: any) {
   return res.status(400).json({ message: error.message });
  }
};
