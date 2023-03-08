/*El método Array.prototype.includes es una función para determinar si un elemento determinado existe en un array. Este método es muy útil a la hora de verificar si un elemento específico está presente en un array o no, sin tener que recorrer todo el array.
Este método acepta dos parámetros: el primer parámetro es el elemento que se quiere buscar y el segundo parámetro es el índice desde donde se iniciará la búsqueda. Si el segundo parámetro no se proporciona, la búsqueda comenzará desde el índice 0.

/*El método includes devuelve un valor booleano que indica si el elemento buscado se encuentra o no en el array. Si el elemento se encuentra en el array, el valor devuelto será true, de lo contrario, el valor será false.*/


const numbers = [1, 2, 3, 4, 5];

const result = numbers.includes(3);

console.log(result); // true

/*El método Array.prototype.join() se utiliza para convertir todos los elementos de un array en un solo string. Este método recibe como argumento un separador, que es una cadena de texto que se utilizará para separar los elementos del arreglo en el string resultante.*/
const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "apple, banana, cherry"

//En este ejemplo, el separador que se utiliza es una coma y un espacio (, ), pero podemos usar cualquier otra cadena de texto como separador. Si no se proporciona un separador, se usará una coma (,) por defecto.*/

const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join();
console.log(fruitsString); // "apple,banana,cherry"
/*
Array.protoype.concat()

El método Array.prototype.concat() se utiliza para combinar dos o más arrays en uno solo. Este método no modifica los arrays originales, sino que devuelve un nuevo array con los elementos de los arrays originales concatenados.*/
array1.concat(array2, array3, ..., arrayX)
/*Donde array1 es el array que llama a la función, y array2, array3, …, arrayX son los arrays que se desean concatenar.*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const string = "hello";
const number = 123;

const result = array1.concat(array2);

console.log(result); // [1, 2, 3, 4, 5, 6, "hello", 123]

