import { ITalle } from "./talle";

export interface ITipo {
  id: bigint;
  activo?: boolean;
  nombre?: string;
  Talle?: ITalle[];
}