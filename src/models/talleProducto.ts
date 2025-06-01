import { IProducto } from "./producto";
import { ITalle } from "./talle";

export interface ITalleProducto {
  id: number;
  activo?: boolean;
  producto_id?: number;
  talle_id?: number;
  Producto?: IProducto;
  Talle?: ITalle;
}