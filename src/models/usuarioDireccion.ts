import { IDireccion } from "./direccion";
import { IUsuario } from "./usuario";

export interface IUsuarioDireccion {
  id: number;
  activo?: boolean;
  direccion_id?: number;
  usuario_id?: number;
  Direccion?: IDireccion;
  Usuario?: IUsuario;
}