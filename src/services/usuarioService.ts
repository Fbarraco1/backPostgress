import { PrismaClient } from '@prisma/client';
import { IUsuario } from '../models/usuario';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const getAllUsuarios = async () => {
  return await prisma.usuario.findMany();
};

export const getUsuarioById = async (id: number) => {
  return await prisma.usuario.findUnique({ where: { id } });
};

export const createUsuario = async (usuario: IUsuario) => {
  const hashedPassword = usuario.contrasenia
    ? await bcrypt.hash(usuario.contrasenia, 10)
    : undefined;

  return await prisma.usuario.create({
    data: {
      nombre: usuario.nombre,
      email: usuario.email,
      contrasenia: hashedPassword,
      activo: usuario.activo,
      rol: usuario.rol,
    },
  });
};

export const updateUsuario = async (id: number, usuario: Partial<IUsuario>) => {
  if (usuario.contrasenia) {
    usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, 10);
  }

  return await prisma.usuario.update({
    where: { id },
    data: {
      nombre: usuario.nombre,
      email: usuario.email,
      contrasenia: usuario.contrasenia,
      activo: usuario.activo,
      rol: usuario.rol,
    },
  });
};

export const deleteUsuario = async (id: number) => {
  return await prisma.usuario.delete({ where: { id } });
};
