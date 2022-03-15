import { Productos,DetalleProductos,Almacenes } from "src/app/app.component";
import { DetalleProducto} from "../interfaces";

export function añadir(producto: number, almacen: number, cant: number){
    if (producto <= 0 || producto > Productos.length){
        console.log("El producto no existe o ingreso un valor negativo")
    }else if(almacen <= 0 || almacen > Almacenes.length){
        console.log("El almacén no existe o ingreso un valor negativo")
    }else if (cant <= 0){
        console.log("El número de Productos que ha ingresado no es válido, o es nulo")
    }else if (cant > Productos[producto-1].cantidadDisponible){
        console.log("No hay suficientes unidades de este producto")
    }else{
        let i: number = 0
        while (i <= Almacenes[almacen-1].contieneDetalleProductos.length){
            if (i == Almacenes[almacen-1].contieneDetalleProductos.length){
                let detalle: DetalleProducto = {
                    id: DetalleProductos.length + 1,
                    cantidad: cant,
                    perteneceProducto: Productos[producto - 1],
                    estaEnAlmacen: Almacenes[almacen -1]
                }
                DetalleProductos.push(detalle)
                Productos[producto - 1].tieneDetalleProductos.push(detalle)
                Productos[producto-1].cantidadDisponible = Productos[producto-1].cantidadDisponible - cant
                Almacenes[almacen - 1].contieneDetalleProductos.push(detalle)
                i = Almacenes[almacen-1].contieneDetalleProductos.length + 1
                console.log("Se han agregado "+cant+" "+Productos[producto-1].nombre+" al almacén "+Almacenes[almacen-1].id)
            }else{
                if (Almacenes[almacen-1].contieneDetalleProductos[i].perteneceProducto.id == Productos[producto-1].id){
                    Almacenes[almacen-1].contieneDetalleProductos[i].cantidad = Almacenes[almacen-1].contieneDetalleProductos[i].cantidad + cant
                    Productos[producto-1].cantidadDisponible = Productos[producto-1].cantidadDisponible - cant
                    i = Almacenes[almacen-1].contieneDetalleProductos.length + 1
                    console.log("Se han agregado "+cant+" "+Productos[producto-1].nombre+" al almacén "+Almacenes[almacen-1].id)
                }
            }
            i++            
        }
    }
}