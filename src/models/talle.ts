import { ITalleProducto } from "./talleProducto";
import { ITipo } from "./tipo";

export interface ITalle {
  id: number;
  activo?: boolean;
  tipo_talle?: string;
  tipo_id?: number;
  Tipo?: ITipo;
  TalleProducto?: ITalleProducto[];
}