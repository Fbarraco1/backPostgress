import { ICategoria } from "./categorias";
import { IDetalleOrden } from "./detalleOrden";
import { IImagenProducto } from "./imagenProducto";
import { ITalleProducto } from "./talleProducto";

export interface IProducto {
  id: number;
  activo?: boolean;
  cantidad?: number;
  color?: string;
  descripcion?: string;
  marca?: string;
  nombre?: string;
  precio?: number;
  categoria_id?: number;
  Categoria?: ICategoria;
  ImagenProducto?: IImagenProducto[];
  DetalleOrden?: IDetalleOrden[];
  TalleProducto?: ITalleProducto[];
}