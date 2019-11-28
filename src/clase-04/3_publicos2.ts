class Course3 {
  public id: number;
  public nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

class EscuelaDigital3 {
  public nombreCurso: string;
  public cursos: Course[] = [];

  // Funcion que permite crear objetos
  constructor(nombreCurso: string) {
    this.nombreCurso = nombreCurso
  }

  public agregarCurso(curso: Course) {
    this.cursos.push(curso);
  }
}