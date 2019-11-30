# TypeScript

Es un lenguaje de programación orientado en javascript open source, desarrollado por Microsoft. Permite trabajar con tipos de datos primitivos.
Permite utilizar las últimas características de JS ya que se traspila para tener compatibilidad con todos los navegadpres, por lo que TypeScript necesita ser compilado.

## ¿Por qué usar TypeScript?

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

Existen dos formas para asignar el tipo de datos, la primera asignando a la variable el valor y automáticamente el tipo es inferido y la segunda forma es asignarle. Ej:

~~~
let estaInscrito: boolean;
~~~