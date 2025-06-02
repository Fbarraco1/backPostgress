import { Request, Response } from 'express';
import * as ordenDeCompraService from '../services/ordenDeCompraService';

export const getOrdenesDeCompra = async (req: Request, res: Response) => {
  const ordenes = await ordenDeCompraService.getAllOrdenesDeCompra();
  res.json(ordenes);
};

export const getOrdenDeCompra = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const orden = await ordenDeCompraService.getOrdenDeCompraById(id);

  if (!orden) {
    return res.status(404).json({ message: 'Orden no encontrada' });
  }

  res.json(orden);
};

export const createOrdenDeCompra = async (req: Request, res: Response) => {
  try {
    const nuevaOrden = await ordenDeCompraService.createOrdenDeCompra(req.body);
    res.status(201).json(nuevaOrden);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateOrdenDeCompra = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const ordenActualizada = await ordenDeCompraService.updateOrdenDeCompra(id, req.body);
    res.json(ordenActualizada);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOrdenDeCompra = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await ordenDeCompraService.deleteOrdenDeCompra(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
