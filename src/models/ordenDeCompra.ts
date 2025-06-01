import { IDetalleOrden } from "./detalleOrden";
import { IUsuario } from "./usuario";

export interface IOrdenDeCompra {
  id: number;
  activo?: boolean;
  fecha?: Date;
  usuario_id?: number;
  Usuario?: IUsuario;
  DetalleOrden?: IDetalleOrden[];
}