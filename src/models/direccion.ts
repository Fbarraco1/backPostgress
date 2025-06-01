import { IUsuarioDireccion } from "./usuarioDireccion";

export interface IDireccion {
  id: number;
  activo?: boolean;
  calle?: string;
  cp?: string;
  localidad?: string;
  Usuario?: IUsuarioDireccion[];
}


