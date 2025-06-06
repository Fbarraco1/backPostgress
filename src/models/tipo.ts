import { Producto } from "@prisma/client";

export interface ITipo {
  id?: number;
  activo?: boolean;
  nombre: string;
  idCategoria: number;
  productos?: Producto[]; 
}
