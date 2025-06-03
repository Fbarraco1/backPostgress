import { Request, Response } from 'express';
import * as productoService from '../services/productoService';

export const getProductos = async (_req: Request, res: Response) => {
  const productos = await productoService.getAllProductos();
  res.json(productos);
};

export const getProducto = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const producto = await productoService.getProductoById(id);

  if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  return res.json(producto);
};

export const createProducto = async (req: Request, res: Response) => {
  try {
    const nuevoProducto = await productoService.createProducto(req.body);
    return res.status(201).json(nuevoProducto);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateProducto = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const productoActualizado = await productoService.updateProducto(id, req.body);
    return res.json(productoActualizado);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteProducto = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await productoService.deleteProducto(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
