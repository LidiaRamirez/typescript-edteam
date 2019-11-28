/* 
  Ejemplo: Modelo Orientado a Objetos
  EscuelaDigital {
    nombre: string,
    cursos: Curso[],
    funcion agregarCurso(): void
  }

  Curso {
    id: number,
    nombre: string
  }
*/

// Miembros Públicos
/* 
Define acceso público a variables y funciones
que no tengan definida un modificador 
*/

class Course {
  id: number; //public
  nombre: string; //public

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

class EscuelaDigital2 {
  nombreCurso: string;
  cursos: Course[] = [];

  // Funcion que permite crear objetos
  constructor(nombreCurso: string) {
    this.nombreCurso = nombreCurso
  }

  agregarCurso(curso: Course) {
    this.cursos.push(curso);
  }
}

const escuela2 = new EscuelaDigital2('Edtean');
let cursoJS= new Course(1, 'Javascript');
escuela2.agregarCurso(cursoJS);
console.log('escuela', escuela2);

// Acceder a los atributos publicos
cursoJS.nombre = 'Javascript desde cero';
cursoJS.id = 20;

console.log('escuela', escuela2);