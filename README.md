# TypeScript

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

Lo que realiza es convertir el archivo .ts a uno .js

## Archivo tsconfig

- Es archivo JSON
- Su presencia indica que el directorio es la raíz de un proyecto TypeScript
- Permite configurar opciones para el compilador
- Especifica los archivos principales y cuales se pueden excluir

### Generación

~~~
tsc --init
~~~

Se crea el archivo **tsconfig.json**, tiene configuraciones como el 'target': 'es5' que permite generar archivos compatibles con es5

### Compilación automática

Para un archivo:

~~~
tsc --watch nombre-archivo.ts
~~~

Para una carpeta, se tiene que estar en el directorio y escribir: 

~~~
tsc --watch 
~~~

## Opciones para personalizar

### include

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


### exclude

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

### redirección para los js generados

~~~
"compilerOptions": {
  "outDir": "./dist",
}
~~~

## Tipos primitivos o tipos básicos

Existen dos formas, la primera asignando a la variable el valor y automáticamente el tipo es inferido y la segunda forma es asignarle. Ej:

~~~
let estaInscrito: boolean;
~~~
