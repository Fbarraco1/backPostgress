import { PrismaClient } from '@prisma/client';
import { IUsuarioDireccion } from '../models/usuarioDireccion';

const prisma = new PrismaClient();

export const getAllUsuarioDirecciones = async () => {
  return await prisma.usuarioDireccion.findMany();
};

export const getUsuarioDireccionById = async (id: number) => {
  return await prisma.usuarioDireccion.findUnique({ where: { id } });
};

export const createUsuarioDireccion = async (direccion: IUsuarioDireccion) => {
  return await prisma.usuarioDireccion.create({
    data: {
      usuario_id: direccion.usuario_id,
      direccion_id: direccion.direccion_id,
      activo: direccion.activo,
    },
  });
};

export const updateUsuarioDireccion = async (
  id: number,
  direccion: Partial<IUsuarioDireccion>
) => {
  return await prisma.usuarioDireccion.update({
    where: { id },
    data: {
      usuario_id: direccion.usuario_id,
      direccion_id: direccion.direccion_id,
      activo: direccion.activo,
    },
  });
};

export const deleteUsuarioDireccion = async (id: number) => {
  return await prisma.usuarioDireccion.delete({ where: { id } });
};
