import { IProducto } from "./producto";

export interface IImagenProducto {
  id: bigint;
  activo?: boolean;
  es_principal?: boolean;
  nombre?: string;
  orden?: number;
  url?: string;
  producto_id?: bigint;
  Producto?: IProducto;
}