import { PrismaClient } from '@prisma/client';
import { ITalleProducto } from '../models/talleProducto';

const prisma = new PrismaClient();

export const getAllTalleProductos = async () => {
  return await prisma.talleProducto.findMany();
};

export const getTalleProductoById = async (id: number) => {
  return await prisma.talleProducto.findUnique({ where: { id } });
};

export const createTalleProducto = async (tp: ITalleProducto) => {
  if (tp.producto_id === undefined || tp.talle_id === undefined) {
    throw new Error('Faltan campos obligatorios: producto_id y talle_id');
  }

  return await prisma.talleProducto.create({
    data: {
      activo: tp.activo ?? true,
      producto_id: tp.producto_id,
      talle_id: tp.talle_id,
    },
  });
};

export const updateTalleProducto = async (
  id: number,
  tp: Partial<ITalleProducto>
) => {
  const dataUpdate: any = {};

  if (tp.activo !== undefined) dataUpdate.activo = tp.activo;
  if (tp.producto_id !== undefined) dataUpdate.producto_id = tp.producto_id;
  if (tp.talle_id !== undefined) dataUpdate.talle_id = tp.talle_id;

  return await prisma.talleProducto.update({
    where: { id },
    data: dataUpdate,
  });
};

export const deleteTalleProducto = async (id: number) => {
  return await prisma.talleProducto.delete({ where: { id } });
};
