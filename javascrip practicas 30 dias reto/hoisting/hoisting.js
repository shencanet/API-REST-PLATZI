/*Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.
Hoisting en variables declaradas con var

En el siguiente código, la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.*/

console.log(nombre) // undefined
var nombre = "Andres" 

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"

if (true){
    var saludo = "hola"
    let despedida = "chao"
  }
  
  console.log(saludo)
  console.log(despedida)

  var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined

//Hoisting en funciones

//Mira el siguiente código y piensa cuál sería el resultado del console.log.

console.log( saludar() )

function saludar() {
  return "Hola"
}
