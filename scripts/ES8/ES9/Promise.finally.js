/*Método finally en promesas

El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.*/

promesa()
    .then(response => console.log(response) // Promesa resuelta
    .catch(error => console.log(response) // Promesa rechazada
    .finally( () => console.log("Finalizado") ) // Código final  

    /*Generadores asíncronos

Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.*/
async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
  }
  
  const generador = anotherGenerator()
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))

  