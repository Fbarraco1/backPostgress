import { prisma } from '../app';

export const getAllTipos = async () => {
  return await prisma.tipo.findMany();
};

export const getTipoById = async (id: number) => {
  return await prisma.tipo.findUnique({ where: { id } });
};

export const createTipo = async (data: { nombre: string; activo?: boolean }) => {
  const { nombre, activo = true } = data; // <-- establecemos un valor por defecto

  return await prisma.tipo.create({
    data: {
      nombre,
      activo, // ahora activo siempre es boolean, nunca undefined
    },
  });
};

export const updateTipo = async (id: number, data: { nombre?: string; activo?: boolean }) => {
  return await prisma.tipo.update({
    where: { id },
    data,
  });
};

export const deleteTipo = async (id: number) => {
  return await prisma.tipo.delete({
    where: { id },
  });
};
