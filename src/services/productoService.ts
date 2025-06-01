import { PrismaClient } from '@prisma/client';
import { IProducto } from '../models/producto';

const prisma = new PrismaClient();

export const getAllProductos = async () => {
  return await prisma.producto.findMany();
};

export const getProductoById = async (id: number) => {
  return await prisma.producto.findUnique({ where: { id } });
};

export const createProducto = async (producto: IProducto) => {
  return await prisma.producto.create({
    data: {
      activo: producto.activo,
      cantidad: producto.cantidad,
      color: producto.color,
      descripcion: producto.descripcion,
      marca: producto.marca,
      nombre: producto.nombre,
      precio: producto.precio,
      categoria_id: producto.categoria_id,
    },
  });
};

export const updateProducto = async (id: number, producto: Partial<IProducto>) => {
  return await prisma.producto.update({
    where: { id },
    data: {
      activo: producto.activo,
      cantidad: producto.cantidad,
      color: producto.color,
      descripcion: producto.descripcion,
      marca: producto.marca,
      nombre: producto.nombre,
      precio: producto.precio,
      ...(producto.categoria_id !== undefined && { categoria_id: producto.categoria_id }),
    },
  });
};


export const deleteProducto = async (id: number) => {
  return await prisma.producto.delete({ where: { id } });
};