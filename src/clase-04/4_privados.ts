// Miembros privado 

/*
  Encapsula con la palabra reservada private
*/


class CoursePrivado {
  private id: number;
  private nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

class EscuelaDigitalPrivado {
  private nombreCurso: string;
  private cursos: Course[] = [];

  // Funcion que permite crear objetos
  constructor(nombreCurso: string) {
    this.nombreCurso = nombreCurso
  }

  public agregarCurso(curso: Course) {
    this.cursos.push(curso);
  }
}

// No se puede acceder
//CoursePrivado.nombre = 'Javascript desde cero';
// CoursePrivado.id = 20;

console.log('escuela', escuela2);