import { Component } from '@angular/core';
import { Almacen,DetalleProducto,Producto } from './TypeScript/interfaces';
import { CrearProducto, CrearAlmacen } from './TypeScript/funciones/CrearInstancias';
import { añadir } from './TypeScript/funciones/AgregarProductoAlmacen';
import { modificar } from './TypeScript/funciones/ModificarDetallesProducto';
import { mover } from './TypeScript/funciones/MoverProductos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

function mostrarProductos(){
  console.log("Productos")
  console.table(Productos)
}
function mostrarDetalles(){
  console.log("Detalles")
  console.table(DetalleProductos)
}
function mostrarAlmacenes(){
  console.log("Almacenes")
  console.table(Almacenes)  
}

//Crear una matriz de Productos, Almacenes y Detalles de Productos
export let Productos: Producto[] = []
export let DetalleProductos: DetalleProducto[] = []
export let Almacenes: Almacen[] = []

console.log("Productos y Almacenes vacios")
mostrarProductos();
mostrarAlmacenes();
//Crear Productos
CrearProducto("agua", 1000)
CrearProducto("gaseosa", 750)
CrearProducto("pan", 650)
CrearProducto("galleta",300)
CrearProducto("pastel",450)

//Crear Almacenes
CrearAlmacen()
CrearAlmacen()
mostrarProductos();
mostrarAlmacenes();

console.log("Añadir productos a los almacenes")
//Añadir productos a los almacenes
//(producto, almacen, cantidad)
//agua ->     1   almacen 1 ->  1
//gaseosa ->  2   almacen 2 ->  2
//pan ->      3
//galleta ->  4
//pastel ->   5

añadir(5,1,450)
añadir(3,2,200)
mostrarAlmacenes();

console.log("Modificar productos de los almacénes")
//Modificar productos de los almacenes
//(almacen, producto, cantidad)
//agua ->     1   almacen 1 ->  1
//gaseosa ->  2   almacen 2 ->  2
//pan ->      3
//galleta ->  4
//pastel ->   5

modificar(1,5,300)
modificar(2,3,150)
mostrarAlmacenes();

console.log("Mover un producto de un almacen a otro")
//Modificar productos de los almacenes
//(almacenInicial, producto, cantidad, almacenFinal)
//agua ->     1   almacen 1 ->  1
//gaseosa ->  2   almacen 2 ->  2
//pan ->      3
//galleta ->  4
//pastel ->   5
mover(1,5,150,2)
mostrarAlmacenes()
mostrarProductos();
mostrarDetalles();




