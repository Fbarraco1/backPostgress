import { ITalleProducto } from "./talleProducto";
import { ITipo } from "./tipo";

export interface ITalle {
  id: bigint;
  activo?: boolean;
  tipo_talle?: string;
  tipo_id?: bigint;
  Tipo?: ITipo;
  TalleProducto?: ITalleProducto[];
}