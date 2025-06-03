import { IOrdenDeCompra } from "./ordenDeCompra";
import { IUsuarioDireccion } from "./usuarioDireccion";

export enum RolUsuario {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface IUsuario {
  id: number;
  activo?: boolean;
  contrasenia?: string;
  email?: string;
  nombre?: string;
  rol?: RolUsuario;
  OrdenDeCompra?: IOrdenDeCompra[];
  UsuarioDireccion?: IUsuarioDireccion[];
}