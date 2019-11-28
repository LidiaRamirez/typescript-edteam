/* Tuplas: Permite definir variables que pueden 
contener conjunto de datos */
let infoCursos: [string, number] = ['TypeScript', 100];
//es distinto a infoCurso: string[]

console.log('Cursos', infoCursos);
console.log(infoCursos[1])

let tuplaTest: [string, string] = ['a', 'b'];
let tuplaTemp: [string, string] = ['c', 'd'];

tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp)