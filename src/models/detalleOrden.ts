import { IOrdenDeCompra } from "./ordenDeCompra";
import { IProducto } from "./producto";

export interface IDetalleOrden {
  id: bigint;
  activo?: boolean;
  cantidad?: number;
  orden_id?: bigint;
  producto_id?: bigint;
  Orden?: IOrdenDeCompra;
  Producto?: IProducto;
}