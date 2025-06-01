import { PrismaClient } from '@prisma/client';
import { IDireccion } from '../models/direccion';

const prisma = new PrismaClient();

export const getAllDirecciones = async () => {
  return await prisma.direccion.findMany();
};

export const getDireccionById = async (id: string) => {
  return await prisma.direccion.findUnique({ where: { id } });
};

export const createDireccion = async (direccion: IDireccion) => {
  return await prisma.direccion.create({
    data: {
      calle: direccion.calle,
      cp: direccion.cp,
      localidad: direccion.localidad,
    },
  });
};

export const updateDireccion = async (id: string, direccion: Partial<IDireccion>) => {
  return await prisma.direccion.update({
    where: { id },
    data: direccion,
  });
};

export const deleteDireccion = async (id: string) => {
  return await prisma.direccion.delete({ where: { id } });
};