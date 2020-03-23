# TypeScript

[https://ed.team/cursos/typescript](https://ed.team/cursos/typescript)

## Tabla de contenidos

1. [Introducción a TypeScript](#Introduccion-a-TypeScript)
    - [Definición](#Definición)
    - [Compilar archivos typescript](#Compilar-archivos-typescript)
2. [Tipos de datos](#Tipos-de-datos)
3.

## Introducción a TypeScript

### Definición
Es un lenguaje de programación orientado en javascript open source, desarrollado por Microsoft. Permite trabajar con tipos de datos primitivos.
Permite utilizar las últimas características de JS ya que se traspila para tener compatibilidad con todos los navegadores, por lo que TypeScript necesita ser compilado.

### ¿Por qué usar TypeScript?

- Orientado a Objetos (Clases, Objetos, Encapsulación, Polimorfismo)
- Soporte de ES5, ES6 y más.
- Se puede utilizar en angular (frontend), node (backend)

## Primeros pasos

### Instalación
~~~
npm install -g typescript
~~~

### Verificación de la versión
~~~
tsc --version
~~~

### Compilar archivos typescript
~~~
tsc nombre-archivo.ts
~~~

Lo que realiza es convertir el archivo con extensión de .ts a .js

Para ejecutar el archivo, desde consola: `node archivo.js`

## Archivo tsconfig

Es JSON que especifica los archivos que se van a incluir o excluir para compilar, también permite configurar opciones para el compilador como por ejemplo el *'target': 'es5'* que genera archivos compatibles con es5

### Generación de tsconfig.json

~~~
tsc --init
~~~

### Compilación automática

Para un archivo typescript:

~~~
tsc --watch nombre-archivo.ts
tsc nombre-archivo -w
~~~

Para una carpeta, se tiene que estar en el directorio y escribir: 

~~~
tsc --watch 
~~~

### Opciones para personalizar tsconfig

#### include

Permite incluir archivos que serán compilados. Ej:

~~~
  "include": [
      "src/*.ts"
  ]
~~~

Si se quiere compilar carpetas internas

~~~
  "include": [
      "src/**/*.ts"
  ]
~~~

#### exclude

Permite excluir archivos que no serían compilados. Ej:
~~~
"exclude": [
    "src/test.ts"
  ]
~~~

Para excluir archivos con *-test'* 
~~~
"exclude": [
    "src/*-test.ts"
  ]
~~~

#### redirección para los js generados

~~~
"compilerOptions": {
  "outDir": "./dist",
}
~~~


## Tipos de datos


Existen dos formas para asignar el tipo de datos, la primera asignando a la variable el valor y automáticamente el tipo es inferido y la segunda forma es asignarle el tipo de dato. Ej:



###  Tipos primitivos

#### Boolean

Forma inferido:
~~~
let estaConectado = true;
~~~
Forma explicita 
~~~
let estaInscrito: boolean;
~~~

#### Number
Ejemplo:
~~~
let estudiantes = 20;
let estudiantes = '100' // inválido
let cantidadEstudiantes: number = 25; 
function getCantidadEstudiantes(): number { return 130; }
~~~

#### Cadena de texto
~~~
let nombre = 'José'; 
let apellido: string = 'Perez';
let nombreCompleto = nombre + ' ' + apellido;
let nombreCompleto2 = `${nombre} ${apellido}`;
~~~

#### Parametro opcionales ( ? )

function saludo(nombre?: string): string { return 'Hola'; }

#### Arreglos
~~~
let cursos: string[] = ['TS' 'JS'];
~~~

#### Arreglos con Generics
~~~
let cursos: Array<string>;
nombres = ['TS' 'JS'];
~~~

#### Arreglos de cualquier tipo
~~~
let arreglo: any[] = [2, 'cadena', true];
~~~

#### Tuplas

~~~
let infoCursos: [string, number] = ['TS', 20];
infoCursos = [20, 'TS'] // incorrecto
console.log(infoCursos[1]) // Para acceder al valor
~~~

#### Alias
~~~
let cursoNuevo: string | number;
cursoNuevo = 'JS';
cursoNuevo = 2
~~~

Como tipo de dato personalizado
~~~
type Curso = string | number;
let cursos = Curso[] = ['TS', 'JS'];
function getCurso() : Curso {}
~~~

#### Aserciones de Tipos de datos
Para asegurarse que el valor que se le asigna es el adecuado. Ej
~~~
let codigoCurso: any = 10;
let numeroCurso: number = <number> codigoCurso; // Con <number> se asegura
~~~
Otro Ej. 
~~~
let estudiante: {nombre: string, curso: string}; // variable personalizada con estructura definida
estudiante.nombre = 'Jose';
estudiante.curso = 'JS';
type Estudiante  = {nombre: string, curso: string}; // tipo que se puede reutilizar
let estudiante2 = <Estudiante> {};
~~~

#### Enumerados
Define conjunto de valores por defecto 
~~~
enum Curso { JS, TS, CSS }
let curso: Curso = Curso.JS; // devuelve 0, posición
let cursoString = Curso[curso]; // devuelve el valor en posición 0
~~~

Otro ejemplo, seria asignarle un valor de posición por defecto 
~~~
enum FinSemana {
  Sabado = 5,
  Domingo
}
~~~

Otro ejemplo es asignarle un valor 
~~~
enum FinSemana {
  Sabado = 'sab',
  Domingo = 'dom',
}
~~~

// console.log(FinSemana.Sabado) retorna sab

#### Interfaces
Agrupador de tipos de datos

~~~
interface ICurso {
  nombre: string;
  id: number
}

let cursoTS: ICurso = {
  nombre: 'TS',
  id: 1
}

~~~

Asi mismo se puede agregar una propiedad como no necesaria

~~~
interface ICurso {
  nombre: string;
  id?: number
}

let cursoTS2: ICurso = {
  nombre: 'TS',
}
~~~

##### Herencia de interfaces

~~~
interface CursoEDteam extends ICurso { costo: number; }
const primerCurso: CursoEDteam = {
  nombre: 'TS desde cero',
  id: 200,
  costo: 100
}
~~~

