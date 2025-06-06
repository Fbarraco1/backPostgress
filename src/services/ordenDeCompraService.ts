import { PrismaClient } from '@prisma/client';
import { IOrdenDeCompra } from '../models/ordenDeCompra';

const prisma = new PrismaClient();

export const getAllOrdenesDeCompra = async () => {
  return await prisma.ordenDeCompra.findMany();
};

export const getOrdenDeCompraById = async (id: number) => {
  return await prisma.ordenDeCompra.findUnique({ where: { id } });
};

export const createOrdenDeCompra = async (orden: IOrdenDeCompra) => {
  if (
    orden.fecha === undefined ||
    orden.usuario_id === undefined
  ) {
    throw new Error('Faltan campos obligatorios');
  }

  return await prisma.ordenDeCompra.create({
    data: {
      activo: orden.activo ?? true,
      fecha: orden.fecha,
      usuario_id: orden.usuario_id,
    },
  });
};

export const updateOrdenDeCompra = async (
  id: number,
  orden: Partial<IOrdenDeCompra>
) => {
  const dataUpdate: any = {};

  if (orden.activo !== undefined) dataUpdate.activo = orden.activo;
  if (orden.fecha !== undefined) dataUpdate.fecha = orden.fecha;
  if (orden.usuario_id !== undefined) dataUpdate.usuario_id = orden.usuario_id;

  return await prisma.ordenDeCompra.update({
    where: { id },
    data: dataUpdate
  });
};

export const desactivarOrdenDeCompra = async (id: number) => {
  return await prisma.ordenDeCompra.update({
    where: { id },
    data: { activo: false },
  });
};

export const deleteOrdenDeCompra = async (id: number) => {
  return await prisma.ordenDeCompra.delete({ where: { id } });
};
