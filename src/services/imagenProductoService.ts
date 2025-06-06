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
  if (
    imagen.url === undefined ||
    imagen.Producto === undefined ||
    imagen.es_principal === undefined ||
    imagen.producto_id === undefined
  ) {
    throw new Error('Faltan campos obligatorios');
  }

  return await prisma.imagenProducto.create({
    data: {
      url: imagen.url,
      producto_id: imagen.producto_id,
      es_principal: imagen.es_principal,
      orden: imagen.orden ?? 0,
      activo: imagen.activo ?? true
    },
  });
};

export const updateImagenProducto = async (
  id: number,
  imagen: Partial<IImagenProducto>
) => {
  // Construimos el objeto data sin incluir propiedades undefined
  const dataUpdate: any = {};

  if (imagen.activo !== undefined) dataUpdate.activo = imagen.activo;
  if (imagen.es_principal !== undefined) dataUpdate.es_principal = imagen.es_principal;
  if (imagen.nombre !== undefined) dataUpdate.nombre = imagen.nombre;
  if (imagen.orden !== undefined) dataUpdate.orden = imagen.orden;
  if (imagen.url !== undefined) dataUpdate.url = imagen.url;
  if (imagen.producto_id !== undefined) dataUpdate.producto_id = imagen.producto_id;

  return await prisma.imagenProducto.update({
    where: { id },
    data: dataUpdate,
  });
};
export const desactivarImagenProducto = async (id: number) => {
  return await prisma.imagenProducto.update({
    where: { id },
    data: { activo: false },
  });
};

export const deleteImagenProducto = async (id: number) => {
  return await prisma.imagenProducto.delete({ where: { id } });
};
