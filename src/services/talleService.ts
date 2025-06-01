import { PrismaClient } from '@prisma/client';
import { ITalle } from '../models/talle';

const prisma = new PrismaClient();

export const getAllTalles = async () => {
  return await prisma.talle.findMany();
};

export const getTalleById = async (id: bigint) => {
  return await prisma.talle.findUnique({ where: { id } });
};

export const createTalle = async (talle: ITalle) => {
  return await prisma.talle.create({
    data: {
      activo: talle.activo,
      tipo_talle: talle.tipo_talle,
      tipo_id: talle.tipo_id,
    },
  });
};

export const updateTalle = async (id: bigint, talle: Partial<ITalle>) => {
  return await prisma.talle.update({
    where: { id },
    data: talle,
  });
};

export const deleteTalle = async (id: bigint) => {
  return await prisma.talle.delete({ where: { id } });
};
