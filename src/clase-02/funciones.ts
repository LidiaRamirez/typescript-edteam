// ? para que acepte ejecutarse sin parametro alguno
function functionSaludo(nombre?: string): string {
  if(nombre)
    return `Hola ${nombre}`
  return '¡Hola!'
}

console.log(functionSaludo());
console.log(functionSaludo('Lidia'))