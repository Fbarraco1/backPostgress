import { prisma } from '../app';
import { ICategoria } from '../models/categorias';


export const getAllCategorias = async () => {
  return await prisma.categoria.findMany({
    include: {
      Producto: true,
      Tipo: true, 
    },
  });
};

export const getCategoriaById = async (id: number) => {
  return await prisma.categoria.findUnique({
    where: { id },
    include: {
      Producto: true,
    },
  });
};

export const createCategoria = async (categoria: Omit<ICategoria, 'id' | 'Producto'>) => {
  return await prisma.categoria.create({
    data: {
      nombre: categoria.nombre,
      activo: categoria.activo ?? true,
    },
  });
};

export const updateCategoria = async (id: number, data: any) => {
  return await prisma.categoria.update({
    where: { id },
    data,
  });
};

export const desactivarCategoria = async (id: number) => {
  return await prisma.categoria.update({
    where: { id },
    data: { activo: false },
  });
};

export const deleteCategoria = async (id: number) => {
  return await prisma.categoria.delete({
    where: { id },
  });
};
