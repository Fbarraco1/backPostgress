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
  if (direccion.usuario_id === undefined || direccion.direccion_id === undefined) {
    throw new Error('Faltan campos obligatorios: usuario_id y direccion_id');
  }
  
  return await prisma.usuarioDireccion.create({
    data: {
      usuario_id: direccion.usuario_id,
      direccion_id: direccion.direccion_id,
      activo: direccion.activo ?? true,
    },
  });
};

export const updateUsuarioDireccion = async (
  id: number,
  direccion: Partial<IUsuarioDireccion>
) => {
  const dataUpdate: any = {};

  if (direccion.usuario_id !== undefined) dataUpdate.usuario_id = direccion.usuario_id;
  if (direccion.direccion_id !== undefined) dataUpdate.direccion_id = direccion.direccion_id;
  if (direccion.activo !== undefined) dataUpdate.activo = direccion.activo;

  return await prisma.usuarioDireccion.update({
    where: { id },
    data: dataUpdate,
  });
};

export const desactivarUsuarioDireccion = async (id: number) => {
  return await prisma.usuarioDireccion.update({
    where: { id },
    data: { activo: false },
  });
};

export const deleteUsuarioDireccion = async (id: number) => {
  return await prisma.usuarioDireccion.delete({ where: { id } });
};
