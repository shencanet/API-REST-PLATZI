
//Exponentiation operator (**): 
console.log(2 ** 3); // Output: 8
console.log(Math.pow(2,3)); // Output: 8

const objeto = {nombre: "Juan", edad: 30,};
const array = [1, 2, 3,];
//El poner una coma al final de un array u objetos ocasionaba errores en el pasado
/*
string.prototype.padStart() y string.prototype.padEnd(): ES7 introduce dos nuevos métodos para el prototipo de String rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. El relleno es aplicado
desde el inicio (izquierda) de la cadena actual si es usado con padStart, y de modo contrario con padEnd. Ejemplo: */
const cadena = "Hola";
console.log(cadena.padStart(7, "**")); // Output: "****Hola"
console.log(cadena.padEnd(7, "*")); // Output: "Hola****"