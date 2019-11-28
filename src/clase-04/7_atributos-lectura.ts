export {};
/*
Evitar que cambie algún atributo o estado, 
sean de solo lectura excepto cuando se instancia
con new
Forma 1: readonly
*/

class Curso {
  constructor(private readonly _id: number, private readonly _nombre: string) {}

  get id() {
    return this._id
  }
  /* DA ERROR 
    set id(id: number) {
    this._id = id;
  } */
  get nombre() {
    return this._nombre
  }
  /* DA ERROR 
    set nombre(nombre: string) {
    this._nombre = nombre;
  } */
}
