-- CreateTable
CREATE TABLE "Categoria" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "id_tipo" BIGINT,
    "nombre" TEXT,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleOrden" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "cantidad" INTEGER,
    "orden_id" BIGINT,
    "producto_id" BIGINT,

    CONSTRAINT "DetalleOrden_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Direccion" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "calle" TEXT,
    "cp" TEXT,
    "localidad" TEXT,

    CONSTRAINT "Direccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagenProducto" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "es_principal" BOOLEAN,
    "nombre" TEXT,
    "orden" INTEGER,
    "url" TEXT,
    "producto_id" BIGINT,

    CONSTRAINT "ImagenProducto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrdenDeCompra" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "fecha" TIMESTAMP(3),
    "usuario_id" BIGINT,

    CONSTRAINT "OrdenDeCompra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "cantidad" INTEGER,
    "color" TEXT,
    "descripcion" TEXT,
    "marca" TEXT,
    "nombre" TEXT,
    "precio" DOUBLE PRECISION,
    "categoria_id" BIGINT,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Talle" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "tipo_talle" TEXT,
    "tipo_id" BIGINT,

    CONSTRAINT "Talle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalleProducto" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "producto_id" BIGINT,
    "talle_id" BIGINT,

    CONSTRAINT "TalleProducto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "nombre" TEXT,

    CONSTRAINT "Tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "contrasenia" TEXT,
    "email" TEXT,
    "nombre" TEXT,
    "rol" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioDireccion" (
    "id" BIGSERIAL NOT NULL,
    "activo" BOOLEAN,
    "direccion_id" BIGINT,
    "usuario_id" BIGINT,

    CONSTRAINT "UsuarioDireccion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DetalleOrden" ADD CONSTRAINT "DetalleOrden_orden_id_fkey" FOREIGN KEY ("orden_id") REFERENCES "OrdenDeCompra"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleOrden" ADD CONSTRAINT "DetalleOrden_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagenProducto" ADD CONSTRAINT "ImagenProducto_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenDeCompra" ADD CONSTRAINT "OrdenDeCompra_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Talle" ADD CONSTRAINT "Talle_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "Tipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalleProducto" ADD CONSTRAINT "TalleProducto_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalleProducto" ADD CONSTRAINT "TalleProducto_talle_id_fkey" FOREIGN KEY ("talle_id") REFERENCES "Talle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDireccion" ADD CONSTRAINT "UsuarioDireccion_direccion_id_fkey" FOREIGN KEY ("direccion_id") REFERENCES "Direccion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDireccion" ADD CONSTRAINT "UsuarioDireccion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
