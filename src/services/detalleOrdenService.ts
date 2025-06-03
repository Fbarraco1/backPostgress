import { PrismaClient } from '@prisma/client';
import { IDetalleOrden } from '../models/detalleOrden';

const prisma = new PrismaClient();

export const getAllDetalleOrden = async () => {
  return await prisma.detalleOrden.findMany();
};

export const getDetalleOrdenById = async (id: number) => {
  return await prisma.detalleOrden.findUnique({ where: { id } });
};

export const createDetalleOrden = async (detalle: IDetalleOrden) => {
  if (
    detalle.cantidad === undefined ||
    detalle.orden_id === undefined ||
    detalle.producto_id === undefined
  ) {
    throw new Error('Faltan campos obligatorios');
  }

  return await prisma.detalleOrden.create({
    data: {
      activo: detalle.activo ?? true,
      cantidad: detalle.cantidad,
      orden_id: detalle.orden_id,
      producto_id: detalle.producto_id,
    },
  });
};


export const updateDetalleOrden = async (id: number, detalle: Partial<IDetalleOrden>) => {
  const { Orden, Producto, ...dataUpdate } = detalle;

  return await prisma.detalleOrden.update({
    where: { id },
    data: dataUpdate,
  });
};

export const deleteDetalleOrden = async (id: number) => {
  return await prisma.detalleOrden.delete({ where: { id } });
};