import { IDetalleOrden } from "./detalleOrden";
import { IUsuario } from "./usuario";

export interface IOrdenDeCompra {
  id: bigint;
  activo?: boolean;
  fecha?: Date;
  usuario_id?: bigint;
  Usuario?: IUsuario;
  DetalleOrden?: IDetalleOrden[];
}