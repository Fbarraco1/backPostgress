import { IDireccion } from "./direccion";
import { IUsuario } from "./usuario";

export interface IUsuarioDireccion {
  id: bigint;
  activo?: boolean;
  direccion_id?: bigint;
  usuario_id?: bigint;
  Direccion?: IDireccion;
  Usuario?: IUsuario;
}