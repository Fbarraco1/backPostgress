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
  return await prisma.talleProducto.create({
    data: {
      activo: tp.activo,
      producto_id: tp.producto_id,
      talle_id: tp.talle_id,
    },
  });
};

export const updateTalleProducto = async (id: number, tp: Partial<ITalleProducto>) => {
  return await prisma.talleProducto.update({
    where: { id },
    data: {
      ...(tp.activo !== undefined && { activo: tp.activo }),
      ...(tp.producto_id !== undefined && { producto_id: tp.producto_id }),
      ...(tp.talle_id !== undefined && { talle_id: tp.talle_id }),
    },
  });
};


export const deleteTalleProducto = async (id: number) => {
  return await prisma.talleProducto.delete({ where: { id } });
};
