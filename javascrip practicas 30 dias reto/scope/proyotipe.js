/*JavaScript es un lenguaje orientado a objetos basado en prototipos. Esto significa que los objetos tienen una relación de prototipo entre ellos, en lugar de tener una relación de clase como en lenguajes como Java o C#.

Un prototipo es un objeto del cual otros objetos heredan propiedades. Cada objeto en JavaScript tiene una propiedad especial llamada “prototype”, que apunta a otro objeto del cual hereda propiedades. Si un objeto no tiene una propiedad específica, JavaScript busca en su prototipo, y así sucesivamente hasta encontrar la propiedad o llegar al objeto base Object.prototype.

Por ejemplo, podemos crear un objeto “Animal” como prototipo para todos los animales:*/
function Animal() {}
// Es importante que las clases empiecen con máyusculas 
Animal.prototype.esVivo = true;
// Y a su prototype le agregamos la propiedad de "esVivo"
//Luego, podemos crear un objeto “Perro” que herede de “Animal”:

function Perro() {}
// Esta es la manera de hacer que un objeto "Herede" de otro
Perro.prototype = Object.create(Animals.prototype);
//Ahora, cada objeto “Perro” tendrá acceso a la propiedad “esVivo” heredada del prototipo “Animals”:

const perro = new Perro();
console.log(perro.esVivo); // Output: true
//También es posible añadir propiedades y métodos específicos a un prototipo:
Perro.prototype.ladrar = function() { console.log("Guau!"); }
const perro = new Perro();
perro.ladrar(); // Output: "Guau!"
/*Además de crear prototipos y heredar de ellos, es posible editar los prototipos de objetos existentes en JavaScript. Por ejemplo, podemos agregar un método al prototipo de Array para calcular la suma de sus elementos:*/
Array.prototype.suma = function() { return this.reduce((a, b) => a + b); }
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.suma()); // Output: 15
//7Otro ejemplo, podemos agregar un método al prototipo de String para convertir una cadena a mayúsculas:

String.prototype.mayusculas = function() { return this.toUpperCase(); }
const nombre = "Juan";
console.log(nombre.mayusculas()); // Output: "JUAN"
