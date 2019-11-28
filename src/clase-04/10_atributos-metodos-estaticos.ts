export {};

/*
No necesito crear objetos

*/

enum MisCursos {
  JavaScript,
  TypeScript,
  Angular
}

class Curso {
  public static cursosDisponibles: MisCursos[] = [MisCursos.JavaScript, MisCursos.TypeScript]
  constructor(private readonly _id: number, private readonly _nombre: string) {}

  static getInfo(c: Curso) {
    return JSON.stringify(c)
  }
}


// Devuelve un array con identificador : 0, 1
console.log('Cursos disponibles', Curso.cursosDisponibles)

let cursoJS= new Curso(1, 'Javascript');
console.log('CursoJS', Curso.getInfo(cursoJS))