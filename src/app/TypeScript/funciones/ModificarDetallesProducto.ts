import { Almacenes, Productos } from "src/app/app.component";

export function modificar(almacen: number, producto: number, cantidad:number){
    if (producto <= 0 || producto > Productos.length){
        console.log("El producto no existe o ingreso un valor negativo")
    }else if(almacen <= 0 || almacen > Almacenes.length){
        console.log("El almacén no existe o ingreso un valor negativo")
    }else if (cantidad < 0){
        console.log("El número de Productos que ha ingresado no es válido, o es nulo")
    }else if (cantidad >=0){
        let i: number = 0
        while (i < Almacenes[almacen-1].contieneDetalleProductos.length){

            if (Almacenes[almacen-1].contieneDetalleProductos[i].perteneceProducto.id == Productos[producto-1].id){
                let cantAct: number = Almacenes[almacen-1].contieneDetalleProductos[i].cantidad
                let resta: number
                if (cantidad > (Productos[producto-1].cantidadDisponible + cantAct)){
                    console.log("No hay suficientes unidades de este producto")                    
                }else{
                    if (cantidad < cantAct){
                        
                        Almacenes[almacen-1].contieneDetalleProductos[i].cantidad = cantidad;
                        resta = cantAct - cantidad
                        Productos[producto-1].cantidadDisponible = Productos[producto-1].cantidadDisponible + resta

                        console.log("El almacen "+Almacenes[almacen-1].id+" ahora tiene "+cantidad+" de "+Productos[producto-1].nombre)
                    }else if (cantidad > cantAct){

                        Almacenes[almacen-1].contieneDetalleProductos[i].cantidad = cantidad;
                        resta = cantidad - cantAct
                        Productos[producto-1].cantidadDisponible = Productos[producto-1].cantidadDisponible - resta

                        console.log("El almacen "+Almacenes[almacen-1].id+" ahora tiene "+cantidad+" de "+Productos[producto-1].nombre)
                    }else if (cantidad == cantAct){
                        console.log("La cantidad ingresada es la misma a la cantidad actual")
                    }
                    i = Almacenes[almacen-1].contieneDetalleProductos.length + 1
                }
            }else{
                if (i == Almacenes[almacen-1].contieneDetalleProductos.length-1){
                    console.log("El producto que ha seleccionado no está dentro del almacén "+Almacenes[almacen-1].id)
                    i = Almacenes[almacen-1].contieneDetalleProductos.length + 1
                }
            }
            i++
        } 
    }
}

