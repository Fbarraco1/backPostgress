import { IOrdenDeCompra } from "./ordenDeCompra";
import { IProducto } from "./producto";

export interface IDetalleOrden {
  id: number;
  activo?: boolean;
  cantidad?: number;
  orden_id?: number;
  producto_id?: number;
  Orden?: IOrdenDeCompra;
  Producto?: IProducto;
}