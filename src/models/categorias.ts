import { IProducto } from "./producto";

export interface ICategoria {
  id: number;
  activo?: boolean;
  id_tipo?: number;
  nombre?: string;
  Producto?: IProducto[];
}