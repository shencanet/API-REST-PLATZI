/*Respuesta Correcta: D) Hoy toca comer: undefined
Una de las limitaciones de las funciones flecha (arrow functions), es que no tiene sus propias referencias a this o super y no se debe usar como métodos.

this siempre apuntará a this desde el contexto en el que definimos la función (ejemplo window).

Por tal razón, la función flecha () => { ... } no sabe de this.comida*/
const objeto1 = {a: 1, b: 2};
const objeto2 = {c: 3, d: 4};
// Object.assing necesita de entrada un target al cual asignarle los valores
// En este ejemplo el target será un nuevo objeto vacío
// Y los siguientes elementos serán las fuentes (que pueden ser varios objetos)
const nuevoObjeto = Object.assign({}, objeto1, objeto2);
console.log(nuevoObjeto); // Output: {a: 1, b: 2, c: 3, d: 4}
/*Otro método importante es Object.freeze(). Este método congela un objeto, impidiendo que sus propiedades sean modificadas. Por ejemplo:*/
const objeto = {a: 1, b: 2};
Object.freeze(objeto);
objeto.a = 3;
console.log(objeto.a); // Output: 1

/*Además de Object.assign y Object.freeze, otro método importante es Object.getOwnProperties. Este método devuelve un array con todas las propiedades de un objeto que son de su propiedad, es decir, no heredadas. Por ejemplo:*/

const objeto1 = {a: 1, b: 2};
const objeto2 = Object.create(objeto1);
objeto2.c = 3;
console.log(Object.getOwnProperties(objeto2)); // Output: ["c"]
//Para iterar sobre las propiedades de un objeto, se puede utilizar un bucle for-in. Por ejemplo:
const objeto = {a: 1, b: 2, c: 3};
for (let propiedad in objeto) {
  console.log(propiedad); // Output: "a", "b", "c"
}
//}
/*
Otra forma de iterar sobre las propiedades de un objeto es utilizando Object.keys() y un bucle for-of. Por ejemplo:*/
const objeto = {a: 1, b: 2, c: 3};
const propiedades = Object.keys(objeto);
// Object.keys nos da un array con las keys del objeto
for (let propiedad of propiedades) {
  console.log(propiedad); // Output: "a", "b", "c"
}

/*Object.values().

Este método devuelve un array con los valores de todas las propiedades de un objeto, incluyendo las heredadas. Por ejemplo:*/
const objeto1 = {a: 1, b: 2};
const objeto2 = Object.create(objeto1);
objeto2.c = 3;
console.log(Object.values(objeto2)); // Output: [3, 1, 2]

/*Object.entries().

Este método devuelve un array con los pares clave-valor de todas las propiedades de un objeto, incluyendo las heredadas. Por ejemplo:*/
const objeto1 = {a: 1, b: 2};
const objeto2 = Object.create(objeto1);
objeto2.c = 3;
console.log(Object.entries(objeto2)); // Output: [["c", 3], ["a", 1], ["b", 2]]
/*hasOwnProperty().

Este método devuelve un booleano indicando si un objeto tiene una propiedad específica que es de su propiedad, es decir, no heredada. Por ejemplo:*/
const objeto1 = {a: 1, b: 2};
const objeto2 = Object.create(objeto1);
objeto2.c = 3;
console.log(objeto2.hasOwnProperty("c")); // Output: true
console.log(objeto2.hasOwnProperty("a")); // Output: false
/*Implementa la lógica para proteger un objeto de cambios.

En este desafío, debes implementar la lógica de la función llamada protectDog que reciba como parámetro los datos de un perro como objeto.

La función debe crear una copia del objeto original utilizando el método Object.assign, almacenarla en una variable y luego congelar la copia utilizando el método Object.freeze para evitar cualquier cambio en sus propiedades, incluyendo los objetos anidados.

De esta manera, el objeto original no se verá afectado y todos los objetos anidados también serán protegidos de ser modificados.

Ejemplo 1:*/

Ejemplo 1:

Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.name = "Toro"
protectedDog.name // "Romeo"

Ejemplo 2:

Input: protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
})

Output:
protectedDog.owner.name = "Pedro"
protectedDog.owner.name // "Victor"



//mi codigo

export function protectDog(dog) {
    for (let property of Object.keys(dog)) {
      Object.freeze(dog[property]);
    }
    let dog_copy = Object.freeze({ ...dog });
    return dog_copy;
  }