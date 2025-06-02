import { IProducto } from "./producto";

export interface ICategoria {
  id: number;
  activo: boolean | null;
  id_tipo: number | null;
  nombre: string | null;
  Producto: IProducto[];
}
