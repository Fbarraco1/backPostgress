import { IOrdenDeCompra } from "./ordenDeCompra";
import { IUsuarioDireccion } from "./usuarioDireccion";

export interface IUsuario {
  id: number;
  activo?: boolean;
  contrasenia?: string;
  email?: string;
  nombre?: string;
  rol?: string;
  OrdenDeCompra?: IOrdenDeCompra[];
  UsuarioDireccion?: IUsuarioDireccion[];
}