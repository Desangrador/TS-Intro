import { Productos,Almacenes,DetalleProductos } from "src/app/app.component"
import { Producto,Almacen,DetalleProducto } from "../interfaces"

export function CrearProducto(Pnombre: string, Pcantidad: number){
    if (Pcantidad <= 0){
        console.log("Error, cantidad de productos no válida")
    }else{
        let i: number = 0
        while (i <= Productos.length){
            if (Productos.length == (i)){
                let producto: Producto ={
                    id: Productos.length + 1,
                    nombre: Pnombre,
                    cantidadTotal: Pcantidad,
                    cantidadDisponible: Pcantidad,
                    tieneDetalleProductos: []
                }
                console.log("Se ha creado el producto "+producto.nombre+" con "+producto.cantidadTotal+" unidades.")
                Productos.push(producto)
                i = Productos.length + 1
            }else{
                if (Productos[i].nombre === Pnombre){
                    //Si el nombre ingresado ya existe en la tala manda mensaje de error
                    i = Productos.length + 1
                    console.log("Error, no puede crear otro producto con el mismo nombre")
                }else{
                    i++
                }
            }           
        }
    }
}
                    
export function CrearAlmacen(){
    let Pid = Almacenes.length
    let almacen: Almacen ={
        id: Pid + 1,
        contieneDetalleProductos: []
    }
    console.log("Se ha creado el almacén nro. "+almacen.id)
    Almacenes.push(almacen)
}