import { IProducto } from "./producto";
import { ITalle } from "./talle";

export interface ITalleProducto {
  id: bigint;
  activo?: boolean;
  producto_id?: bigint;
  talle_id?: bigint;
  Producto?: IProducto;
  Talle?: ITalle;
}