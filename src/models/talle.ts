import { ITalleProducto } from "./talleProducto";

export interface ITalle {
  id: number;
  activo?: boolean;
  tipo_talle?: string;
  TalleProducto?: ITalleProducto[];
}