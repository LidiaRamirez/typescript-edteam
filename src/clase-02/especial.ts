//Tipo Any: cuando no se define con algún tipo por default toma any
let desconocido; // Es como un 'var' desconocido
desconocido = 'hola';
desconocido = 2;

let desconocido2: any = 2;

// Tipo: Void, cuando se ejecuta algo y no retorna nada 
let vacio: void;

function mostrarContenido(curso: string): void {
  const mensaje = curso ? `Bienvenido al curso ${curso}` : 'Suscribete'
  console.log('mensaje', mensaje)
}

mostrarContenido('typescript')
