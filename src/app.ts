import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

// Importar todas las rutas
import { router as categoriaRouter } from './routes/categoriaRoutes';
import detalleOrdenRouter from './routes/detalleOrdenRoutes';
import direccionRouter from './routes/direccionRoutes';
import imagenProductoRouter from './routes/imagenProductoRoutes';
import ordenDeCompraRouter from './routes/ordenDeCompraRoutes';
import productoRouter from './routes/productoRoutes';
import talleProductoRouter from './routes/talleProductoRoutes';
import talleRouter from './routes/talleRoutes';
import tipoRouter from './routes/tipoRoutes';
import usuarioDireccionRouter from './routes/usuarioDireccion';
import usuarioRouter from './routes/usuarioRoutes';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';



dotenv.config();
const PORT_Node = process.env.PORT_Node || 8085;

const app = express();
export const prisma = new PrismaClient();

// Middleware de seguridad
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas - prefijo /api para todas las rutas
app.use('/api', categoriaRouter);
app.use('/api', detalleOrdenRouter);
app.use('/api', direccionRouter);
app.use('/api', imagenProductoRouter);
app.use('/api', ordenDeCompraRouter);
app.use('/api', productoRouter);
app.use('/api', talleProductoRouter);
app.use('/api', talleRouter);
app.use('/api', tipoRouter);
app.use('/api', usuarioDireccionRouter);
app.use('/api', usuarioRouter);
app.use('/api/auth', authRoutes);


console.log("Iniciando servidor...");

// Si usas Express, por ejemplo:
app.listen(PORT_Node, () => {
  console.log(`Servidor escuchando en puerto ${PORT_Node}`);
});

export default app;