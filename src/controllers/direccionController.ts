import { Request, Response } from 'express';
import * as direccionService from '../services/direccionService';

export const getDirecciones = async (_req: Request, res: Response) => {
  const direcciones = await direccionService.getAllDirecciones();
  res.json(direcciones);
};

export const getDireccion = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const direccion = await direccionService.getDireccionById(id);

  if (!direccion) {
    return res.status(404).json({ message: 'Dirección no encontrada' });
  }

  return res.json(direccion);
};

export const createDireccion = async (req: Request, res: Response) => {
  try {
    const nuevaDireccion = await direccionService.createDireccion(req.body);
    res.status(201).json(nuevaDireccion);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDireccion = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const direccionActualizada = await direccionService.updateDireccion(id, req.body);
    return res.json(direccionActualizada);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteDireccion = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await direccionService.deleteDireccion(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
