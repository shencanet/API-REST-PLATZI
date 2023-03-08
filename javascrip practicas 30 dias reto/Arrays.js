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
/*spread operator:

El spread operator es una forma conveniente de hacer una copia de un array. El spread operator se utiliza para expandir los elementos de un array en una lista:*/

const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray];

console.log(originalArray === copiedArray); // Output: false
//Arrays Bidimensionales
const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];

console.log(matrix);
const matrix = new Array(3);
for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(3);
}

matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
matrix[2][0] = 7;
matrix[2][1] = 8;
matrix[2][2] = 9;

console.log(matrix);
console.log(matrix[1][1]);

const originalMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const copiedMatrix = [...originalMatrix];

console.log(originalMatrix === copiedMatrix);
/*Además de los arrays bidimensionales, también puedes crear arrays de más dimensiones. Por ejemplo, puedes crear un array tridimensional:*/
const cube = [];
for (let i = 0; i < 3; i++) {
  cube[i] = [];
	for (let j = 0; j < 3; j++) {
		cube[i][j] = [];
		for (let k = 0; k < 3; k++) {
			cube[i][j][k] = i + j + k;
		}
	}
}
console.log(cube);

