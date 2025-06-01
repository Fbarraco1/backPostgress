import { PrismaClient } from '@prisma/client';
import { ICategoria } from '../models/categorias';


const prisma = new PrismaClient();

export const getAllCategorias = async () => {
  return await prisma.categoria.findMany();
};

export const getCategoriaById = async (id: bigint) => {
  return await prisma.categoria.findUnique({ where: { id } });
};

export const createCategoria = async (categoria: ICategoria) => {
  return await prisma.categoria.create({
    data: {
      nombre: categoria.nombre,
      activo: categoria.activo,
      id_tipo: categoria.id_tipo,
    },
  });
};

export const updateCategoria = async (id: bigint, categoria: Partial<ICategoria>) => {
  return await prisma.categoria.update({
    where: { id },
    data: categoria,
  });
};

export const deleteCategoria = async (id: bigint) => {
  return await prisma.categoria.delete({ where: { id } });
};