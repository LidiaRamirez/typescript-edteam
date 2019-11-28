export {};
/*
abstrae propiedades, o cambiar clases, atributos

Decoradores: 

- Es una función y su parametro por convencion es target
- Característica futura para JS
- Se puede usar en TypeScript
- Se usan para analizar, modificar o reemplazar
la definición de una clase
- Se pueden usar a nivel de clase, método y atributo

Actualmente como no es soportado por el navegador
se necesita realizar traspilación de código

Para usar esto se tiene que modificar el tsconfig.json
Se tiene que activar la propiedad experimentalDecorators: true

Para crear un decorador:
 -Se agrega @Nombre antes de la clase
 -
*/

function Entidad(target: any) {
  console.log('Entidad', target)
}

@Entidad
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

let TypeScript = new Curso(1, 'JS')