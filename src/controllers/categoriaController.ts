import {Request, Response} from "express"
import * as categoriaService from '../services/categoriaService';

export const getCategorias = async (_req: Request, res: Response) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    return res.status(200).json( categorias );
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategoria = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    const categoria = await categoriaService.getCategoriaById(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    return res.json(categoria);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategoria = async (req: Request, res: Response) => {
  try {
    const { id, Producto, ...categoriaData } = req.body;
       
    if (id !== undefined) {
      return res.status(400).json({ message: "No se permite enviar un ID" });
    }

    if (typeof categoriaData.nombre !== "string" || categoriaData.nombre.trim() === "") {
      return res
        .status(400)
        .json({ message: "El campo 'nombre' es obligatorio y debe ser un string no vacío" });
    }

    const nuevaCategoria = await categoriaService.createCategoria(categoriaData);
    return res.status(201).json(nuevaCategoria);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateCategoria = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    const categoriaActualizada = await categoriaService.updateCategoria(id, req.body);
    return res.json(categoriaActualizada);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const eliminarCategoria = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const categoria = await categoriaService.desactivarCategoria(Number(id));
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ message: 'Error al desactivar la categoria', error });
  }
};

export const deleteCategoria = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    await categoriaService.deleteCategoria(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

