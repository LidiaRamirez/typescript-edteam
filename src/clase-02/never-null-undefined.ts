// Tipo: Never: Ambito funcion, cuando la funcion
// no va a retornar un valor válido, sirve para excepciones
let nunca: never;

function retornaError(error: string): never {
  throw new Error('Error')
}

// retirnaError('Valor inesperado')