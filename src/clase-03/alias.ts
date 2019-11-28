let cursoAlias: string | number;
cursoAlias = 'Javascript';
cursoAlias = 3;

function getCurso() : string | number {
  return 1
}

// Arreglos con diversos tipos de datos
let cursos2: (string | number)[] = ['JS', 6]

/* Alias permite a que el código
 no se vea tan engorroso sl agregar string | number | boolean*/
 type Curso = string | number; 

 let cursos3: Curso[] = ['JS', 6]