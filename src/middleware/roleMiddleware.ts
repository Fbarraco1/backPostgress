import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Middleware para verificar que el usuario sea ADMIN
export const verificarAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Verificar que el usuario esté autenticado
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: 'Usuario no autenticado' });
      return;
    }

    // Buscar el usuario en la base de datos para obtener su rol actualizado
    const usuario = await prisma.usuario.findUnique({
      where: { id: req.user.id },
      select: { rol: true, activo: true }
    });

    if (!usuario) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    if (!usuario.activo) {
      res.status(403).json({ message: 'Usuario inactivo' });
      return;
    }

    if (usuario.rol !== 'ADMIN') {
      res.status(403).json({ 
        message: 'Acceso denegado. Se requieren permisos de administrador' 
      });
      return;
    }

    // Si llegamos aquí, el usuario es ADMIN
    next();
  } catch (error) {
    console.error('Error en verificarAdmin:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Middleware para verificar que el usuario sea USER o ADMIN (para operaciones de lectura)
export const verificarUsuarioAutenticado = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: 'Usuario no autenticado' });
      return;
    }

    // Verificar que el usuario esté activo
    const usuario = await prisma.usuario.findUnique({
      where: { id: req.user.id },
      select: { activo: true, rol: true }
    });

    if (!usuario) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    if (!usuario.activo) {
      res.status(403).json({ message: 'Usuario inactivo' });
      return;
    }

    // Tanto USER como ADMIN pueden acceder
    next();
  } catch (error) {
    console.error('Error en verificarUsuarioAutenticado:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};