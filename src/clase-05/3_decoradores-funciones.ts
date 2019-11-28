export {};

function Entidad(config: any) {
  console.log('Entidad', config);
  return function(target: any) { 
    target.clave = config.clave;   
    console.log('target', target)
  }
}

function enumerable(value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}

function readonly(target: any, name: any, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
  return descriptor;
}

@Entidad({
  clave: 'CURSO'
})

class Curso {
  prueba: string;
  constructor(private _id: number, private _nombre: string) {
    this.prueba = ''
  }

  @enumerable(false) // no aparece como propiedad
  getPrueba() {
    return this.prueba;
  }

  @readonly
  lectura() {

  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id
  }

  set nombre(nombre: string) {
    this._nombre = nombre
  }

  get nombre() {
    return this._nombre;
  }
}

@Entidad({
  clave: 'ESCUELA_DIGITAL'
})

class EscuelaDigital {

}

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

let TypeScript = new Curso(1, 'JS')
analizarClase(Curso); // Parametro: Una clase
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostrarPropiedades(Curso);

/* Con esto evitamos alguien modifique 
   lo siguiente dará error
  typescript.lectura = function() {}
*/