import { PrismaClient } from '@prisma/client';
import { IDetalleOrden } from '../models/detalleOrden';

const prisma = new PrismaClient();

export const getAllDetalleOrden = async () => {
  return await prisma.detalleOrden.findMany();
};

export const getDetalleOrdenById = async (id: bigint) => {
  return await prisma.detalleOrden.findUnique({ where: { id } });
};

export const createDetalleOrden = async (detalle: IDetalleOrden) => {
  return await prisma.detalleOrden.create({
    data: {
      activo: detalle.activo,
      cantidad: detalle.cantidad,
      orden_id: detalle.orden_id,
      producto_id: detalle.producto_id,
    },
  });
};

export const updateDetalleOrden = async (id: bigint, detalle: Partial<IDetalleOrden>) => {
  return await prisma.detalleOrden.update({
    where: { id },
    data: detalle,
  });
};

export const deleteDetalleOrden = async (id: bigint) => {
  return await prisma.detalleOrden.delete({ where: { id } });
};