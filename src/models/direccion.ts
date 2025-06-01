import { IUsuarioDireccion } from "./usuarioDireccion";

export interface IDireccion {
  id: bigint;
  activo?: boolean;
  calle?: string;
  cp?: string;
  localidad?: string;
  Usuario?: IUsuarioDireccion[];
}


