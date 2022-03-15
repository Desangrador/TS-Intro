//Tarea del Almacen
//Declaración de interfaces

export interface Producto{
    id: number,
    nombre: string,
    cantidadTotal: number,
    cantidadDisponible: number,
    tieneDetalleProductos: DetalleProducto[]
}

export interface DetalleProducto{
    id: number,
    cantidad: number,
    perteneceProducto: Producto
    estaEnAlmacen: Almacen
}
  
export interface Almacen{
    id: number,
    contieneDetalleProductos: DetalleProducto[]
}