class CourseMinimizando {
  constructor(private id: number, private nombre: string) {}
}

class EscuelaDigitalMinimizando {
  private cursos: CourseMinimizando[] = [];

  constructor(private nombreCurso: string) {
  }

  public agregarCurso(curso: CourseMinimizando) {
    this.cursos.push(curso);
  }
}