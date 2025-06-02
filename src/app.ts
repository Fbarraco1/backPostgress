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

export default app;