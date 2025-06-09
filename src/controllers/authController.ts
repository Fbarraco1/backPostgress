import { Request, Response } from 'express';
import * as authService from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    const { usuario, token } = await authService.register(req.body);
    res.status(201).json({ usuario, token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { usuario, token } = await authService.login(req.body);
    res.status(200).json({ usuario, token });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};
