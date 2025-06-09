import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Extensión de tipos inline
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';

export const verificarToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token requerido' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Token inválido' });
      return;
    }

    req.user = decoded;
    next();
  });
};