import { Request, Response } from 'express';
import * as ordenDeCompraService from '../services/ordenDeCompraService';

export const getOrdenesDeCompra = async (_req: Request, res: Response) => {
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

  return res.json(orden);
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
    return res.json(ordenActualizada);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const eliminarOrdenDeCompra = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const orden = await ordenDeCompraService.desactivarOrdenDeCompra(Number(id));
    res.status(200).json(orden);
  } catch (error) {
    res.status(400).json({ message: 'Error al desactivar la orden de compra', error });
  }
};

export const deleteOrdenDeCompra = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await ordenDeCompraService.deleteOrdenDeCompra(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
