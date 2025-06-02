import { Request, Response } from 'express';
import * as tipoService from '../services/tipoService';

export const getTipos = async (req: Request, res: Response) => {
  try {
    const tipos = await tipoService.getAllTipos();
    return res.json(tipos);
  } catch (error: any) {
    return res.status(500).json({ message: 'Error al obtener tipos', error: error.message });
  }
};

export const getTipo = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const tipo = await tipoService.getTipoById(id);
    if (!tipo) {
      return res.status(404).json({ message: 'Tipo no encontrado' });
    }

    return res.json(tipo);
  } catch (error: any) {
    return res.status(500).json({ message: 'Error al obtener tipo', error: error.message });
  }
};

export const createTipo = async (req: Request, res: Response) => {
  try {
    const nuevoTipo = await tipoService.createTipo(req.body);
    return res.status(201).json(nuevoTipo);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateTipo = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const tipoActualizado = await tipoService.updateTipo(id, req.body);
    return res.json(tipoActualizado);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteTipo = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await tipoService.deleteTipo(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};