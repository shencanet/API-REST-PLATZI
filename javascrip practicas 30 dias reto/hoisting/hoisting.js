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


//Hoisting de variables dentro de una función
/*
El hoisting desplaza las declaraciones a la parte superior del scope más cercano, en el caso de una función dentro de otra función, seguiría el siguiente comportamiento.*/

function scope() {
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  var nombre = "Andres"
  var edad = 20
  for (var i = 0; i< 6; i++) {
  //...
  }
}
//JavaScript lo interpretaría como lo siguiente:

function scope() {
    var nombre = undefined
    var edad = undefined
    var i = undefined
    
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    nombre = "Andres"
    edad = 20
    for ( i = 0; i< 6; i++) {
    
    //
    }
  }
  

  //Hosting en funciones asignadas a variables
/*
Mira el siguiente código y piensa cuál sería el resultado del console.log.*/

console.log( saludar() )

var saludar = function saludar() {
  return "hola"
}


/*
La respuesta es un error de tipo porque si asignas una función a una variable declarada con var, y la invocas antes declararla, la variable será de tipo undefined y no de función por el hoisting.*/

var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}

