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

  /*ES10?
24

ES10: flat-map y trimStart-trimEnd
25

ES10: try catch y fromEntries

¿Qué se implementó en ES11?
26

ES11: optional chaining
27

ES11: BigInt y Nullish
28

ES11: Promise.allSettled
29

ES11: globalThis y matchAll
30

ES11: dynamic Import

¿Qué se implementó en ES12?
31

ES12: numeric-separators y replaceAll
32

ES12: promise-any y métodos privados

¿Qué se implementó en ES13?
33

ES13: at
34

ES13: top level await en el consumo de una API

Recapitulación
35

Performance
Curso de ECMAScript: Historia y Versiones de JavaScript
Curso de ECMAScript: Historia y Versiones de JavaScript
Oscar Barajas Tavares

Oscar Barajas Tavares
ES9: Promise.finally
23/35
Recursos
Marcadores

Las siguientes características de ES9 o ES2018 que aprenderás son: método finally para promesas y generadores asíncronos.
Método finally en promesas

El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.

promesa()
    .then(response => console.log(response) // Promesa resuelta
    .catch(error => console.log(response) // Promesa rechazada
    .finally( () => console.log("Finalizado") ) // Código final  

Generadores asíncronos

Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.

async function* anotherGenerator() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const generador = anotherGenerator()
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))

Cómo utilizar for await

De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.

El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.*/


async function forAwait() {
    const nombres = ["Alexa", "Oscar", "David"]
    for await (let valor of nombres) {
      console.log(valor)
    }
  }
  
  forAwait()

  
