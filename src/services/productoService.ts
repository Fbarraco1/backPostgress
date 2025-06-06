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
  if (
    producto.nombre === undefined ||
    producto.precio === undefined ||
    producto.categoria_id === undefined
  ) {
    throw new Error('Faltan campos obligatorios');
  }

  return await prisma.producto.create({
    data: {
      activo: producto.activo ?? true,
      cantidad: producto.cantidad ?? 0,
      color: producto.color ?? '',
      descripcion: producto.descripcion ?? '',
      marca: producto.marca ?? '',
      nombre: producto.nombre,
      precio: producto.precio,
      categoria_id: producto.categoria_id,
    },
  });
};

export const updateProducto = async (
  id: number,
  producto: Partial<IProducto>
) => {
  const dataUpdate: any = {};

  if (producto.activo !== undefined) dataUpdate.activo = producto.activo;
  if (producto.cantidad !== undefined) dataUpdate.cantidad = producto.cantidad;
  if (producto.color !== undefined) dataUpdate.color = producto.color;
  if (producto.descripcion !== undefined) dataUpdate.descripcion = producto.descripcion;
  if (producto.marca !== undefined) dataUpdate.marca = producto.marca;
  if (producto.nombre !== undefined) dataUpdate.nombre = producto.nombre;
  if (producto.precio !== undefined) dataUpdate.precio = producto.precio;
  if (producto.categoria_id !== undefined) dataUpdate.categoria_id = producto.categoria_id;

  return await prisma.producto.update({
    where: { id },
    data: dataUpdate,
  });
};

export const desactivarProducto = async (id: number) => {
  return await prisma.producto.update({
    where: { id },
    data: { activo: false },
  });
};

export const deleteProducto = async (id: number) => {
  return await prisma.producto.delete({ where: { id } });
};
