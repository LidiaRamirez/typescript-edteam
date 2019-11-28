// Aserciones de tipo se les conoce como Type Assertions

let codigoCurso: any;
codigoCurso = 100;

let numeroCurso: number = <number>codigoCurso;
console.log('numeroCurso', numeroCurso);

let estudianteN: { nombre: string, curso: string};
/* estudianteN.nombre = 'Jorge';
estudianteN.curso = 'JS'; */

type Estudiante = {nombre: string, curso: string};

let estudiante2 = <Estudiante>{}
estudiante2.nombre = 'Juan'
estudiante2.curso = 'Javascript'
