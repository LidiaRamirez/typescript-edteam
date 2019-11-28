export {};

function Entidad(config: any) {
  console.log('Entidad', config);
  return function(target: any) { 
    target.clave = config.clave;   
    console.log('target', target)
  }
}

@Entidad({
  clave: 'CURSO'
})

class Curso {
  constructor(private _id: number, private _nombre: string) {}

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
}

let TypeScript = new Curso(1, 'JS')
analizarClase(Curso); // Parametro: Una clase
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital)