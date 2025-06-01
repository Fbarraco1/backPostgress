import { PrismaClient } from '@prisma/client';
import { IOrdenDeCompra } from '../models/ordenDeCompra';

const prisma = new PrismaClient();

export const getAllOrdenesDeCompra = async () => {
  return await prisma.ordenDeCompra.findMany();
};

export const getOrdenDeCompraById = async (id: bigint) => {
  return await prisma.ordenDeCompra.findUnique({ where: { id } });
};

export const createOrdenDeCompra = async (orden: IOrdenDeCompra) => {
  return await prisma.ordenDeCompra.create({
    data: {
      activo: orden.activo,
      fecha: orden.fecha,
      usuario_id: orden.usuario_id,
    },
  });
};

export const updateOrdenDeCompra = async (
  id: bigint,
  orden: Partial<IOrdenDeCompra>
) => {
  return await prisma.ordenDeCompra.update({
    where: { id },
    data: orden,
  });
};

export const deleteOrdenDeCompra = async (id: bigint) => {
  return await prisma.ordenDeCompra.delete({ where: { id } });
};
