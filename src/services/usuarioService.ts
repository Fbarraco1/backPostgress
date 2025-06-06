import { PrismaClient } from '@prisma/client';
import { IUsuario, RolUsuario } from '../models/usuario';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const getAllUsuarios = async () => {
  return await prisma.usuario.findMany();
};

export const getUsuarioById = async (id: number) => {
  return await prisma.usuario.findUnique({ where: { id } });
};

export const createUsuario = async (usuario: IUsuario) => {
  if (
    usuario.contrasenia === undefined ||
    usuario.nombre === undefined ||
    usuario.email === undefined
  ) {
    throw new Error('La contraseña es obligatoria');
  }

  const hashedPassword = await bcrypt.hash(usuario.contrasenia, 10);

  return await prisma.usuario.create({
    data: {
      nombre: usuario.nombre,
      email: usuario.email,
      contrasenia: hashedPassword,
      activo: usuario.activo ?? true,
      rol: usuario.rol ? usuario.rol as RolUsuario : RolUsuario.USER,
    },
  });
};

export const updateUsuario = async (id: number, usuario: Partial<IUsuario>) => {
  const dataUpdate: any = {};

  if (usuario.nombre !== undefined) dataUpdate.nombre = usuario.nombre;
  if (usuario.email !== undefined) dataUpdate.email = usuario.email;
  if (usuario.contrasenia !== undefined) {
    dataUpdate.contrasenia = await bcrypt.hash(usuario.contrasenia, 10);
  }
  if (usuario.activo !== undefined) dataUpdate.activo = usuario.activo;
  if (usuario.rol !== undefined) dataUpdate.rol = usuario.rol;

  return await prisma.usuario.update({
    where: { id },
    data: dataUpdate,
  });
};

export const desactivarUsuario = async (id: number) => {
  return await prisma.usuario.update({
    where: { id },
    data: { activo: false },
  });
};

export const deleteUsuario = async (id: number) => {
  return await prisma.usuario.delete({ where: { id } });
};
