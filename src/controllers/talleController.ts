import { Request, Response } from 'express';
import * as talleService from '../services/talleService';

export const getTalles = async (_req: Request, res: Response) => {
  const talles = await talleService.getAllTalles();
  res.json(talles);
};

export const getTalle = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const talle = await talleService.getTalleById(id);

  if (!talle) {
    return res.status(404).json({ message: 'Talle no encontrado' });
  }

  return res.json(talle);
};

export const createTalle = async (req: Request, res: Response) => {
  try {
    const nuevoTalle = await talleService.createTalle(req.body);
    res.status(201).json(nuevoTalle);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTalle = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const talleActualizado = await talleService.updateTalle(id, req.body);
    return res.json(talleActualizado);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const eliminarTalle = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const talle = await talleService.desactivarTalle(Number(id));
    res.status(200).json(talle);
  } catch (error) {
    res.status(400).json({ message: 'Error al desactivar el talle', error });
  }
};

export const deleteTalle = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await talleService.deleteTalle(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
