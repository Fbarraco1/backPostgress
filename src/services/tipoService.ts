import { PrismaClient } from '@prisma/client';
import { ITipo } from '../models/tipo';

const prisma = new PrismaClient();

export const getAllTipos = async () => {
  return await prisma.tipo.findMany();
};

export const getTipoById = async (id: number) => {
  return await prisma.tipo.findUnique({ where: { id } });
};

export const createTipo = async (tipo: ITipo) => {
  return await prisma.tipo.create({
    data: {
      activo: tipo.activo,
      nombre: tipo.nombre,
    },
  });
};

export const updateTipo = async (id: number, tipo: Partial<ITipo>) => {
  return await prisma.tipo.update({
    where: { id },
    data: {
      ...(tipo.activo !== undefined && { activo: tipo.activo }),
      ...(tipo.nombre !== undefined && { nombre: tipo.nombre }),
    },
  });
};


export const deleteTipo = async (id: number) => {
  return await prisma.tipo.delete({ where: { id } });
};
