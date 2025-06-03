import { Request, Response } from 'express';
import * as usuarioService from '../services/usuarioService';

export const getUsuarios = async (_req: Request, res: Response) => {
  const usuarios = await usuarioService.getAllUsuarios();
  res.json(usuarios);
};

export const getUsuario = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'ID inválido' });

  const usuario = await usuarioService.getUsuarioById(id);
  if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

 return res.json(usuario);
};

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const nuevoUsuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: 'ID inválido' });

    const actualizado = await usuarioService.updateUsuario(id, req.body);
    return res.json(actualizado);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: 'ID inválido' });

    await usuarioService.deleteUsuario(id);
   return res.status(204).send();
  } catch (error: any) {
   return res.status(400).json({ message: error.message });
  }
};
