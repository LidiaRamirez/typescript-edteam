"use strict";
function suma(a, b) {
    return a + b;
}

//Esto no es permitido
//const resultado = suma('a', true) 

var resultado = suma(2, 3);
console.log('2 + 3 = ', resultado);

let curso = 'TypeScript';
let saludo= `Bienvenidos al curso de ${curso}`;
console.log('saludo', saludo)
