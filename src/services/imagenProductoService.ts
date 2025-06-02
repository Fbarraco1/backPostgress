import { PrismaClient } from '@prisma/client';
import { IImagenProducto } from '../models/imagenProducto';

const prisma = new PrismaClient();
export const getAllImagenesProducto = async () => {
  return await prisma.imagenProducto.findMany();
};

export const getImagenProductoById = async (id: number) => {
  return await prisma.imagenProducto.findUnique({ where: { id } });
};

export const createImagenProducto = async (imagen: IImagenProducto) => {
  return await prisma.imagenProducto.create({
    data: {
      url: imagen.url,
      producto_id: imagen.producto_id,
      es_principal: imagen.es_principal,
    },
  });
};
export const updateImagenProducto = async (
  id: number,
  imagen: Partial<IImagenProducto>
) => {
  return await prisma.imagenProducto.update({
    where: { id },
    data: {
      activo: imagen.activo,
      es_principal: imagen.es_principal,
      nombre: imagen.nombre,
      orden: imagen.orden,
      url: imagen.url,
      // Asegurarse de que producto_id solo se pase si está definido
      ...(imagen.producto_id !== undefined && { producto_id: imagen.producto_id }),
    },
  });
};



export const deleteImagenProducto = async (id: number) => {
  return await prisma.imagenProducto.delete({ where: { id } });
};