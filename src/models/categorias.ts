import { IProducto } from "./producto";
import { ITipo } from "./tipo";

export interface ICategoria {
  id: number;
  activo: boolean;
  nombre: string;
  Producto: IProducto[];
  Tipo: ITipo[];
}
