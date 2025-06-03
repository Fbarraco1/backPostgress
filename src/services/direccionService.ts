import { PrismaClient } from '@prisma/client';
import { IDireccion } from '../models/direccion';

const prisma = new PrismaClient();

export const getAllDirecciones = async () => {
  return await prisma.direccion.findMany();
};

export const getDireccionById = async (id: number) => {
  return await prisma.direccion.findUnique({ where: { id } });
};

export const createDireccion = async (direccion: IDireccion) => {
    if (
    direccion.calle === undefined ||
    direccion.cp === undefined ||
    direccion.localidad === undefined
  ) {
    throw new Error('Faltan campos obligatorios');
  }

  return await prisma.direccion.create({
    data: {
      calle: direccion.calle,
      cp: direccion.cp,
      localidad: direccion.localidad,
    },
  });
};

export const updateDireccion = async (id: number, direccion: Partial<IDireccion>) => {
  const { Usuario, ...dataUpdate } = direccion;

  return await prisma.direccion.update({
    where: { id },
    data: dataUpdate,
  });
};


export const deleteDireccion = async (id: number) => {
  return await prisma.direccion.delete({ where: { id } });
};