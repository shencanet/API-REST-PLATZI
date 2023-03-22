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