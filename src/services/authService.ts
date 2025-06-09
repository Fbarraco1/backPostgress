import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password: string) => {
  return password.length >= 6;
};

export const register = async ({ email, contrasenia, nombre }: { email: string, contrasenia: string, nombre: string }) => {
  if (!email || !validateEmail(email)) throw new Error('Email inválido');
  if (!contrasenia || !validatePassword(contrasenia)) throw new Error('La contraseña debe tener al menos 6 caracteres');
  if (!nombre || nombre.trim() === '') throw new Error('El nombre es obligatorio');

  const existingUser = await prisma.usuario.findUnique({ where: { email } });
  if (existingUser) throw new Error('El email ya está registrado');

  const hashedPassword = await bcrypt.hash(contrasenia, 10);
  const nuevoUsuario = await prisma.usuario.create({
    data: {
      email,
      contrasenia: hashedPassword,
      nombre,
      rol: 'USER',
      activo: true,
    },
  });

 const token = jwt.sign(
    { 
      id: nuevoUsuario.id, 
      email: nuevoUsuario.email,
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) 
    }, 
    JWT_SECRET
  );

  return { usuario: nuevoUsuario, token };
};

export const login = async ({ email, contrasenia }: { email: string, contrasenia: string }) => {
  if (!email || !validateEmail(email)) throw new Error('Email inválido');
  if (!contrasenia) throw new Error('La contraseña es obligatoria');

  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) throw new Error('Usuario no encontrado');

  const valido = await bcrypt.compare(contrasenia, usuario.contrasenia);
  if (!valido) throw new Error('Contraseña incorrecta');

  const token = jwt.sign(
    { 
      id: usuario.id, 
      email: usuario.email,
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas en segundos
    }, 
    JWT_SECRET
  );

  return { usuario, token };
};