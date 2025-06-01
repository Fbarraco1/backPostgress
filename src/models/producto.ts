import { ICategoria } from "./categorias";
import { IDetalleOrden } from "./detalleOrden";
import { IImagenProducto } from "./imagenProducto";
import { ITalleProducto } from "./talleProducto";

export interface IProducto {
  id: bigint;
  activo?: boolean;
  cantidad?: number;
  color?: string;
  descripcion?: string;
  marca?: string;
  nombre?: string;
  precio?: number;
  categoria_id?: bigint;
  Categoria?: ICategoria;
  ImagenProducto?: IImagenProducto[];
  DetalleOrden?: IDetalleOrden[];
  TalleProducto?: ITalleProducto[];
}