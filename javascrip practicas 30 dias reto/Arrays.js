/*En JavaScript, los arrays se pueden crear de una forma diferente a la tradicional utilizando la clase constructora Array. */

let myArray = new Array();
/*También puedes especificar los elementos que deseas incluir en el array al crearlo, como se muestra a continuación: */
let myArray = new Array(1, 2, 3, 4);
/*La función Array.from() permite crear un nuevo array a partir de un objeto similar a un array o iterable. La sintaxis para utilizar Array.from() es la siguiente:*/
let myArray = Array.from('hello');
console.log(myArray); // ["h", "e", "l", "l", "o"]
/*Array(n).fill()

La función fill() permite llenar un array con un valor específico. La sintaxis para utilizar fill() es la siguiente:*/
let myArray = new Array(5).fill(0);
console.log(myArray); // [0, 0, 0, 0, 0]
/*Array.isArray()

La función Array.isArray() permite determinar si un objeto es un array o no. La sintaxis para utilizar Array.isArray() es la siguiente:*/
let myArray = [1, 2, 3, 4];
console.log(Array.isArray(myArray)); // true


//Copiando Arrays
/*En JavaScript, es común tener la necesidad de hacer una copia de un array existente*/

const originalArray = [1, 2, 3, 4];
const copiedArray = new Array(...originalArray);

console.log(originalArray === copiedArray); 
console.log(originalArray)
console.log(copiedArray)// Output: false
//otro metodo concat
const originalArray1 = [1, 2, 3, 4];
const copiedArray1 = originalArray.concat();

console.log(originalArray1 === copiedArray1); // Output: false