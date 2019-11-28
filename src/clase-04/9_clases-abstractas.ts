export {};
/*
  
*/

class Curso {
  constructor(private readonly _id: number, private readonly _nombre: string) {}

  get id() {
    return this._id
  }

  get nombre() {
    return this._nombre
  }
}

abstract class Escuela {
  protected cursos: Curso[] = [];
  constructor(protected _id: number, protected _nombre: string) {}

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
    this._nombre = nombre
  }

  public agregarCurso(curso: Curso) {
    this.cursos.push(curso);
  }
}

class EscuelaDigital extends Escuela {
  constructor(id: number, nombre: string, private _paginaWeb:string) {
    super(id, nombre) // Reusar el constructor de la superclase
  }

  get paginaWeb() {
    return this._paginaWeb
  }
  set paginaWeb(paginaWeb: string) {
    this._paginaWeb = paginaWeb;
  }
}

/*
Esto dara un error, 
porque no se puede crear una instancia
const miEscuela = new Escuela(1, 'Mi escuela')
*/