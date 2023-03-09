/*objeto con los cambios.

Las funciones mutables son comúnmente utilizadas para manipular arrays y objetos. Algunos ejemplos de funciones mutables en JavaScript incluyen Array.prototype.push(), Array.prototype.pop(), Array.prototype.shift(), Array.prototype.unshift(), Array.prototype.splice() y Object.assign().

Es importante tener en cuenta que las funciones mutables pueden tener efectos secundarios, ya que modifican el estado de los objetos. Por lo tanto, es importante utilizarlas de manera consciente y tener cuidado al trabajar con ellas.

Por ejemplo, supongamos que tenemos un array llamado “numbers” que contiene los números 1, 2, 3 y 4. Si usamos la función mutable Array.prototype.push() para agregar un nuevo número al final del array, e estado del array “numbers” cambiará.
}*/


const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
// Output: [1, 2, 3, 4, 5]
/*Como se puede ver en este ejemplo, el método push() ha modificado el estado del array “numbers” al agregar un nuevo número al final del array.*/
const numbers = [1, 2, 3, 4];
const newNumbers = numbers.concat([5]);
console.log(numbers);
// Output: [1, 2, 3, 4]
console.log(newNumbers);
//

const person = {
	name: 'John Doe',
	age: 30
};

function addProperty(object, key, value) {
	object[key] = value;
}

addProperty(person, 'address', '123 Main St');

console.log(person);


const numbers = [1, 2, 3, 4];

const people = [
	{ name: 'John Doe', age: 30 },
	{ name: 'Jane Doe', age: 25 },
	{ name: 'Jim Doe', age: 35 }
];

function addFive(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] += 5;
	}
}

function addYear(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].age++;
	}
}

addFive(numbers);
addYear(people);
console.log(numbers);
// Output: [6, 7, 8, 9]
console.log(people);
// Output: [{ name: 'John Doe', age: 31 }, { name: 'Jane Doe', age: 26 }, { name: 'Jim Doe', age: 36 }]



// Output: { name: 'John Doe', age: 30, address: '123 Main St' }