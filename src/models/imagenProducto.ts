import { IProducto } from "./producto";

export interface IImagenProducto {
  id: number;
  activo?: boolean;
  es_principal?: boolean;
  nombre?: string;
  orden?: number;
  url?: string;
  producto_id?: number;
  Producto?: IProducto;
}