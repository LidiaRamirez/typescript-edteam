
import { Curso } from './modelo/curso';
import { EscuelaDigital } from './modelo/escuela-digital'
import { analizarClase, mostrarPropiedades, PI } from './util'

let TypeScript = new Curso(1, 'JS')
analizarClase(Curso); // Parametro: Una clase
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostrarPropiedades(Curso);

console.log('Valor PI', PI)