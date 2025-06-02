import { ITalle } from "./talle";

export interface ITipo {
  id?: number;
  activo?: boolean;
  nombre: string;
  Talle?: ITalle[];
}
