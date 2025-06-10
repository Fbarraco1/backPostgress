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
    const { id, nombre, precio, categoria_id, ...rest } = req.body;

    if (id !== undefined) {
      return res.status(400).json({ message: 'No se permite enviar un ID' });
    }

    if (typeof nombre !== 'string' || nombre.trim() === '') {
      return res.status(400).json({ message: "'nombre' es obligatorio y debe ser un string no vacío" });
    }

    if (typeof precio !== 'number' || isNaN(precio) || precio <= 0) {
      return res.status(400).json({ message: "'precio' es obligatorio y debe ser un número mayor a 0" });
    }

    if (typeof categoria_id !== 'number' || isNaN(categoria_id)) {
      return res.status(400).json({ message: "'categoria_id' es obligatorio y debe ser un número válido" });
    }

    const nuevoProducto = await productoService.createProducto({
      nombre: nombre.trim(),
      precio,
      categoria_id,
      ...rest,
    });

    return res.status(201).json(nuevoProducto);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateProducto = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const { nombre, precio, cantidad, categoria_id, color, marca, descripcion } = req.body;

    if (nombre !== undefined && (typeof nombre !== 'string' || nombre.trim() === '')) {
      return res.status(400).json({ message: "'nombre' debe ser un string no vacío" });
    }

    if (precio !== undefined && (typeof precio !== 'number' || isNaN(precio) || precio <= 0)) {
      return res.status(400).json({ message: "'precio' debe ser un número mayor a 0" });
    }

    if (cantidad !== undefined && (typeof cantidad !== 'number' || isNaN(cantidad) || cantidad < 0)) {
      return res.status(400).json({ message: "'cantidad' debe ser un número mayor o igual a 0" });
    }

    if (categoria_id !== undefined && (typeof categoria_id !== 'number' || isNaN(categoria_id))) {
      return res.status(400).json({ message: "'categoria_id' debe ser un número válido" });
    }

    if (color !== undefined && (typeof color !== 'string' || color.trim() === '')) {
      return res.status(400).json({ message: "'color' debe ser un string no vacío" });
    }

    if (marca !== undefined && (typeof marca !== 'string' || marca.trim() === '')) {
      return res.status(400).json({ message: "'marca' debe ser un string no vacío" });
    }

    if (descripcion !== undefined && (typeof descripcion !== 'string' || descripcion.trim() === '')) {
      return res.status(400).json({ message: "'descripcion' debe ser un string no vacío" });
    }

    const productoActualizado = await productoService.updateProducto(id, req.body);
    return res.json(productoActualizado);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const eliminarProducto = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const producto = await productoService.desactivarProducto(Number(id));
    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json({ message: 'Error al desactivar el producto', error });
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
