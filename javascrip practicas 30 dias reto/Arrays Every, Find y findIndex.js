/*https://platzi.com/clases/2461-arrays/41333-every/*/
/*Por ejemplo, supongamos que tienes un array de números y deseas comprobar si todos los números son mayores que cero:*/
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(element) {
	return element > 0;
});

console.log(allPositive);
/*En este ejemplo, el método every se utiliza para comprobar si todos los elementos en el array numbers son mayores que cero*/
//ARROW FUNCTION
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(element => element > 0);
onsole.log(allPositive);
// Output: true
const objects = [{name: 'John'}, {name: 'Jane'}, {name: 'Jim'}];
const allHaveName = objects.every(function(element) {
  return element.hasOwnProperty('name');
});

console.log(allHaveName);

/*Array.prototype.Find()

El método find se puede utilizar en arrays para encontrar un elemento que cumpla con una condición determinada. Este método devuelve el primer elemento que cumple con la condición o undefined si no se encuentra ninguno.*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.find(number => number > 5);

console.log(result);
// En este ejemplo, el callback number => number > 5 se utiliza para determinar si un número es mayor que 5. Si se encuentra un número que cumpla con esta condición, el método find devuelve ese número y detiene la búsqueda.*/

/*También es posible utilizar el método find con objetos. Por ejemplo, aquí hay un ejemplo de cómo utilizar el método find para encontrar el primer objeto con una propiedad específica:*/

const people = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Jim', age: 40 }
  ];
  const result = people.find(person => person.age === 32);
  
  console.log(result);
  // Output: { name: 'John', age: 32 }

  /*El método findIndex es una función que se utiliza para buscar un elemento en un array y devolver el índice de su primera aparición. Este método acepta un callback como argumento y la ejecuta para cada elemento en el array hasta que se encuentra un elemento que cumpla con la condición especificada. En ese momento, findIndex devuelve el índice del elemento encontrado.

  El método findIndex es una función que se utiliza para buscar un elemento en un array y devolver el índice de su primera aparición. Este método acepta un callback como argumento y la ejecuta para cada elemento en el array hasta que se encuentra un elemento que cumpla con la condición especificada. En ese momento, findIndex devuelve el índice del elemento encontrado.
  */



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = numbers.findIndex(num => num > 100);
console.log(index); // Output: -1


