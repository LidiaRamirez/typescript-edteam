export { analizarClase, mostrarPropiedades, PI};

function analizarClase(clase: any) {
  console.log('Clave: ', clase.clave);
  for(let prop in clase.prototype) {
    console.log('prop', prop);
  }
}

function mostrarPropiedades(clase: any) {
  for(let prop in clase.prototype) {
    console.log('prop', prop)
  }
}

const PI = 3.14;