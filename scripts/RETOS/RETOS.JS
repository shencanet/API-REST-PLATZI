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