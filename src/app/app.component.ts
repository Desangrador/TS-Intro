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



