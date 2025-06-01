import { IProducto } from "./producto";

export interface ICategoria {
  id: bigint;
  activo?: boolean;
  id_tipo?: bigint;
  nombre?: string;
  Producto?: IProducto[];
}