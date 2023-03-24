console.log(Number(2) === Number(2)); //🤔?
console.log(Boolean(false) === Boolean(false)); //🤔?
console.log(Symbol('foo') === Symbol('foo')); //🤔?Respuesta Correcta: A) true, true, false
/*
Primero, usamos el constructor Number para convertir 2 a number, como solo es una conversión de primitivos entonces el resultado es true.

Segundo, usamos el constructor Boolean para convertir false a boleano, nuevamente solo es una conversión, entonces el resultado de la comparación es true.

Tercero, ningún Symbol es igual a otro Symbol, por más que en el ejemplo tengan los mismos placeholders foo, nunca serán iguales. Entonces siempre nos dará false.

No debemos confundir el contructor Number y Boolean por sí mismos, con dichos costructures acompañados de la palabra new, si hacemos lo siguiente:

  const a = new Number(2);

 const b = new Boolean(true);  



Ambas variables serán objetos creados por medio de estos contructores, y no solo conversiones como en el ejercicio principal de este reto.*/
const one = true || {} || null;
const two = null || 'hello' || '';
const three = 0 || [] || true;
console.log(one, two, three);
/*Respuesta Correcta: B) true "hello" []
Con el operador || "OR", devolvemos el primer valor booleano verdadero "true", si todos los valores son falsos, se devuelve el último valor de la sentencia.

En la constante one: (true || {} || null); su primer valor es verdadero, por lo tanto, retorna true.

En la constante two: (null || "hello" || ""); null es un valor falso "false", la cadena "hello" es un valor verdadero "true", por lo tanto, retornará la cadena "hello" y no evaluará más condiciones.

En la constante three: (0 || [] || true); el valor 0 es un valor falso "false", mientras que el arreglo "array" vacío es un valor verdadero "true", por lo tanto retornaría el arreglo vacío.

Entonces, la salida de este código sería: (true, "hello", []);*/

function makeMulti(x) {
  return (y) => x * y;
}

const five = makeMulti(5);
const rta = five(6);
console.log(rta);
/*Aquí tenemos el escenario de un closure, un closure es:

- Una función que puede recibir un dato y lo almacena en su scope
- Retorna una función que ocupa ese dato previamente guardado

En este caso estamos haciendo una "fábrica" de multiplicadores.

// five es una función que tiene guardada en su scope la variable x con el valor de 5
const five = makeMulti(5);

// Ahora podemos pasarle a la función five cualquier valor que queramos multiplicar por 5
const rta = five(6);

// Podemos hacer más funciones multiplicadoras como:
const seven = makeMulti(7);
const two = makeMulti(2); */

let Alimento = function (comida) {
  this.comida = comida;
};

Alimento.prototype.comerHoy = () => console.log('Hoy toca comer:', this.comida);
const alimento = new Alimento('ensalada');

alimento.comerHoy(); //❓
/*Respuesta Correcta: D) Hoy toca comer: undefined
Una de las limitaciones de las funciones flecha (arrow functions), es que no tiene sus propias referencias a this o super y no se debe usar como métodos.

this siempre apuntará a this desde el contexto en el que definimos la función (ejemplo window).

Por tal razón, la función flecha () => { ... } no sabe de this.comida*/
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

for (let item in myLifeSummedUp) {
  console.log('uno');
  console.log(item); //🤔?
}

for (let item of myLifeSummedUp) {
  console.log('Dos');
  console.log(item); //🤔?
}
/*Respuesta Correcta: A) 0 1 2 3 y "☕" "💻" "🍷" "🍫"
Con el bucle for-in, podemos iterar sobre propiedades enumerables. Los enumerables en el arreglo son justamente sus índices. Por ello es 0 1 2 3.

Con un bucle for-of, podemos recorrer iterables. Un arreglo por definición es un iterable, en cada iteración la variable item es igual al elemento sobre el cual se itera en ese momento. Por ello es "☕" "💻" "🍷" "🍫".

En la practica los bucles for-of son más usados y ocacionalmente los bucles for-in.*/
function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error!', e);
  }
}

sayHi();
/*La función greeting con la palabra reservada throw genera una excepción de tipo string en el código.

La función sayHi consta de una sentencia try...catch, recordemos que si no hay ningún tipo de excepción el código ejecuta el bloque try pero como si generamos una excepción entonces entramos al bloque catch donde el parámetro e adopta el valor de la excepción, osea, Hello world!. Por eso el resultado es "Oh no an error! Hello world!"*/