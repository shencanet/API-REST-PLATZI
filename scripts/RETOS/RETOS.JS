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