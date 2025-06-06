import { Request, Response } from 'express';
import * as usuarioDireccionService from '../services/usuarioDireccionService';

export const getUsuarioDirecciones = async (_req: Request, res: Response) => {
  const lista = await usuarioDireccionService.getAllUsuarioDirecciones();
  res.json(lista);
};

export const getUsuarioDireccion = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  const direccion = await usuarioDireccionService.getUsuarioDireccionById(id);
  if (!direccion) {
    return res.status(404).json({ message: 'Relación usuario-dirección no encontrada' });
  }

  return res.json(direccion);
};

export const createUsuarioDireccion = async (req: Request, res: Response) => {
  try {
    const nuevaRelacion = await usuarioDireccionService.createUsuarioDireccion(req.body);
    res.status(201).json(nuevaRelacion);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUsuarioDireccion = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const actualizada = await usuarioDireccionService.updateUsuarioDireccion(id, req.body);
    return res.json(actualizada);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const eliminarUsuarioDireccion = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuarioDirec = await usuarioDireccionService.desactivarUsuarioDireccion(Number(id));
    res.status(200).json(usuarioDirec);
  } catch (error) {
    res.status(400).json({ message: 'Error al desactivar la UsuarioDireccion', error });
  }
};

export const deleteUsuarioDireccion = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await usuarioDireccionService.deleteUsuarioDireccion(id);
    return res.status(204).send();
  } catch (error: any) {
   return res.status(400).json({ message: error.message });
  }
};
