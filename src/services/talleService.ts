import { PrismaClient } from '@prisma/client';
import { ITalle } from '../models/talle';

const prisma = new PrismaClient();

export const getAllTalles = async () => {
  return await prisma.talle.findMany();
};

export const getTalleById = async (id: number) => {
  return await prisma.talle.findUnique({ where: { id } });
};

export const createTalle = async (talle: ITalle) => {
  if (talle.tipo_talle === undefined) {
    throw new Error('Faltan campos obligatorios: tipo_talle y tipo_id');
  }

  return await prisma.talle.create({
    data: {
      activo: talle.activo ?? true,
      tipo_talle: talle.tipo_talle,
    },
  });
};

export const updateTalle = async (id: number, talle: Partial<ITalle>) => {
  const dataUpdate: any = {};

  if (talle.activo !== undefined) dataUpdate.activo = talle.activo;
  if (talle.tipo_talle !== undefined) dataUpdate.tipo_talle = talle.tipo_talle;

  return await prisma.talle.update({
    where: { id },
    data: dataUpdate,
  });
};

export const desactivarTalle = async (id: number) => {
  return await prisma.talle.update({
    where: { id },
    data: { activo: false },
  });
};

export const deleteTalle = async (id: number) => {
  return await prisma.talle.delete({ where: { id } });
};
