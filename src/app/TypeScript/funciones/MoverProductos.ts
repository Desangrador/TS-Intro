import { Almacenes, DetalleProductos } from "src/app/app.component";
import { DetalleProducto } from "../interfaces";
import { Productos } from "src/app/app.component";

export function mover(almacenInicial: number, producto: number, cantidad: number, almacenFinal: number){
    if (almacenInicial == almacenFinal){
        console.log("Error, el almacén de destino no puede ser el mismo que el almacén de origen")
    }else if (producto <= 0 || producto > Productos.length){
        console.log("El producto no existe o ingreso un valor negativo")
    }else if (almacenInicial <= 0 || almacenInicial > Almacenes.length){
        console.log("El almacen de origen no existe o ingreso un valor negativo")
    }else if (almacenFinal <= 0 || almacenFinal > Almacenes.length){
        console.log("El almacen de destino no existe o ingreso un valor negativo")
    }else if (cantidad <= 0){
        console.log("Error, no  puede mover productos si la cantidad es cero o negativa")
    }else{
        let i: number = 0
        let j: number = 0
        while (i < Almacenes[almacenInicial-1].contieneDetalleProductos.length){
            if (Productos[producto-1].id == Almacenes[almacenInicial-1].contieneDetalleProductos[i].perteneceProducto.id){

                while (j < Almacenes[almacenFinal-1].contieneDetalleProductos.length){

                    if (Productos[producto-1].id == Almacenes[almacenFinal-1].contieneDetalleProductos[i].perteneceProducto.id){
                        Almacenes[almacenInicial-1].contieneDetalleProductos[i].cantidad = Almacenes[almacenInicial-1].contieneDetalleProductos[i].cantidad - cantidad
                        Almacenes[almacenFinal-1].contieneDetalleProductos[i].cantidad = Almacenes[almacenFinal-1].contieneDetalleProductos[i].cantidad + cantidad
                        
                        console.log("Se han movido "+cantidad+" de "+Productos[producto-1].nombre+" del almacén "+Almacenes[almacenInicial-1].id+" al almacén "+Almacenes[almacenFinal-1].id)
                        j = Almacenes[almacenFinal-1].contieneDetalleProductos.length
                    }else{
                        if (j == Almacenes[almacenFinal-1].contieneDetalleProductos.length - 1){
                            let detalle: DetalleProducto ={
                                id: DetalleProductos.length + 1,
                                cantidad: cantidad,
                                perteneceProducto: Productos[producto-1],
                                estaEnAlmacen: Almacenes[almacenFinal-1]
                            }
                            DetalleProductos.push(detalle)
                            Productos[producto-1].tieneDetalleProductos.push(detalle)
                            Almacenes[almacenFinal-1].contieneDetalleProductos.push(detalle)
                            Almacenes[almacenInicial-1].contieneDetalleProductos[i].cantidad = Almacenes[almacenInicial-1].contieneDetalleProductos[i].cantidad - cantidad
                            
                            console.log("Se han movido "+cantidad+" de "+Productos[producto-1].nombre+" del almacén "+Almacenes[almacenInicial-1].id+" al almacén "+Almacenes[almacenFinal-1].id)
                            j = Almacenes[almacenFinal-1].contieneDetalleProductos.length
                        }
                        j++
                    }
                    i = Almacenes[almacenInicial-1].contieneDetalleProductos.length
                }
            }else{
                if (i == Almacenes[almacenInicial-1].contieneDetalleProductos.length - 1){
                    console.log("Error, el producto no se encuentra en el almacén "+Almacenes[almacenInicial].id)
                }
                i++
            }
        }
    }
}