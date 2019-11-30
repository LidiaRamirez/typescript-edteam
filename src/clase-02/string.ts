// String 
let nombre = 'Luis';
let apellido: string = 'Aviles';
let nombreCompleto = nombre + ' ' + apellido;
console.log('nombre completo', nombreCompleto);

// String + ES6 Template literals
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('nombre completo 2', nombreCompleto2);

let mensaje = `
Mi nombre es ${nombreCompleto}
Tengo 30 años
`
//Se respeta los saltos de línea
console.log('mensaje', mensaje)