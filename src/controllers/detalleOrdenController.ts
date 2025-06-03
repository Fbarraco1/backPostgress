import { Request, Response } from 'express';
import * as detalleOrdenService from '../services/detalleOrdenService';

export const getDetalleOrdenes = async (_req: Request, res: Response) => {
  const detalles = await detalleOrdenService.getAllDetalleOrden();
  res.json(detalles);
};

export const getDetalleOrden = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const detalle = await detalleOrdenService.getDetalleOrdenById(id);

  if (!detalle) {
    return res.status(404).json({ message: 'Detalle de orden no encontrado' });
  }

  return res.json(detalle);
};

export const createDetalleOrden = async (req: Request, res: Response) => {
  try {
    const nuevoDetalle = await detalleOrdenService.createDetalleOrden(req.body);
    res.status(201).json(nuevoDetalle);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDetalleOrden = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const detalleActualizado = await detalleOrdenService.updateDetalleOrden(id, req.body);
    return res.json(detalleActualizado);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteDetalleOrden = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await detalleOrdenService.deleteDetalleOrden(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
