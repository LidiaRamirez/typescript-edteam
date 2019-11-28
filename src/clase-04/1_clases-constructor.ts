/* 
  Ejemplo: Modelo Orientado a Objetos
  EscuelaDigital {
    nombre: string,
    cursos: string[],
    funcion agregarCurso(): void
  }
*/

class EscuelaDigital {
  nombreCurso: string;
  cursos: string[] = [];

  // Funcion que permite crear objetos
  constructor(nombreCurso: string) {
    this.nombreCurso = nombreCurso
  }

  agregarCurso(curso: string) {
    this.cursos.push(curso);
  }
}

const escuela = new EscuelaDigital('Edtean');
escuela.agregarCurso('JS')
console.log('escuela', escuela);