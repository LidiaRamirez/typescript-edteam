export {};

// METODOS SET Y GET
/*
Get: Permite obtener un valor o el estado de un atributo
set: Te permite cambiar el estado, un valor
*/
class Curso {
  constructor(private _id: number, private _nombre: string) {}

  get id() {
    return this._id
  }
  set id(id: number) {
    this._id = id;
  }
  get nombre() {
    return this._nombre
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
}

class EscuelaDigital{
  private cursos: Curso[] = [];

  constructor(private _nombre: string) {
  }

  public agregarCurso(curso: Curso) {
    this.cursos.push(curso);
  }

  set nombre(nombre: string) {
    this._nombre = nombre
  }

  get nombre() {
    return this._nombre;
  }
}

let cursoJS= new Curso(1, 'Javascript');
cursoJS.id = 20; // Asignacion: SET

const escuela = new EscuelaDigital('Edtean');
console.log('escuela.nombre', escuela.nombre); // Leyendo estado: GET