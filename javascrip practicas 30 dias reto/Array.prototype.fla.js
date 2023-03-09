/*El método Array.prototype.flat() permite combinar varios arreglos en un solo arreglo plano (sin niveles adicionales de anidamiento). Este método es útil cuando se trabaja con arreglos multidimensionales y se desea obtener una sola secuencia de elementos en un solo arreglo.
Este método puede aceptar un argumento opcional, que indica la profundidad de anidamiento máxima hasta la cual se deben aplanar los arreglos. Si no se proporciona un argumento, el método aplanará los arreglos hasta el nivel más profundo.*/


const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*En este ejemplo, el arreglo multidimensional multiDimensionalArray se aplanó utilizando el método Array.prototype.flat() y se guardó en la variable flatArray. Luego, se imprime en la consola el valor de flatArray y se puede ver que se trata de un arreglo plano con los elementos del arreglo multidimensional combinados en una sola secuencia.*/

const multiDimensionalArray = [[1, 2, 3], [4, [5, 6]], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat(1);
console.log(flatArray); // [1, 2, 3, 4, [5, 6], 7, 8, 9]
//Array.prototype.flatMap()

/*El método Array.prototype.flatMap() combina las funcionalidades de los métodos Array.prototype.map() y Array.prototype.flat() en uno solo. Para transformar cada elemento del arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

Este método se aplica a un objeto Array y toma como argumento una función que se aplicará a cada elemento del arreglo. La función aplicada a cada elemento devuelve un nuevo arreglo, y flatMap aplana este arreglo resultante en un único arreglo.*/
const numbers = [1, 2, 3, 4];

const result = numbers.flatMap(x => [x, x * 2]);

console.log(result);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]
const values = [1, 2, 3, null, 4, undefined, 5];

const result = values.flatMap(x => x);

console.log(result);
// Output: [1, 2, 3, 4, 5]


