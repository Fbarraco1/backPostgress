import { Request, Response } from 'express';
import * as imagenProductoService from '../services/imagenProductoService';

export const getImagenesProducto = async (_req: Request, res: Response) => {
  const imagenes = await imagenProductoService.getAllImagenesProducto();
  res.json(imagenes);
};

export const getImagenProducto = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const imagen = await imagenProductoService.getImagenProductoById(id);

  if (!imagen) {
    return res.status(404).json({ message: 'Imagen no encontrada' });
  }

  return res.json(imagen);
};

export const createImagenProducto = async (req: Request, res: Response) => {
  try {
    const nuevaImagen = await imagenProductoService.createImagenProducto(req.body);
    return res.status(201).json(nuevaImagen);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateImagenProducto = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const imagenActualizada = await imagenProductoService.updateImagenProducto(id, req.body);
    return res.json(imagenActualizada);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const eliminarImagenProducto = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const imagenProd = await imagenProductoService.desactivarImagenProducto(Number(id));
    res.status(200).json(imagenProd);
  } catch (error) {
    res.status(400).json({ message: 'Error al desactivar la imagenProducto', error });
  }
};

export const deleteImagenProducto = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await imagenProductoService.deleteImagenProducto(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
