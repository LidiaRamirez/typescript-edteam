"use strict";
// String 
var nombre = 'Luis';
var apellido = 'Aviles';
var nombreCompleto = nombre + ' ' + apellido;
console.log('nombre completo', nombreCompleto);
// String + ES6 Template literals
var nombreCompleto2 = nombre + " " + apellido;
console.log('nombre completo 2', nombreCompleto2);
var mensaje = "\nMi nombre es " + nombreCompleto + "\nTengo 30 a\u00F1os\n";
//Se respeta los saltos de línea
console.log('mensaje', mensaje);
