/*Para crear una promesa, se utiliza el constructor Promise, el cual acepta una función que a su vez recibe dos parámetros: resolve y reject. El primero se usa para indicar que la operación se ha completado correctamente y se puede obtener el valor, mientras que el segundo se usa para indicar que la operación ha fallado y se devuelve el error correspondiente.
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 2000);
  });

  //Podemos encadenar promesas para ejecutar múltiples operaciones asincrónicas de manera secuencial.

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ number: 42, text: "hello" });
    }, 2000);
  });
  
  promise
    .then((result) => {
      const doubledNumber = result.number * 2;
      return doubledNumber.toString();
    })
    .then((result) => {
      console.log(`The result is ${result}`);
    })
    .catch((error) => {
      console.error(error);
    });

    /*Los temporizadores son una característica importante en JavaScript para programar tareas para que se ejecuten en el futuro. Dos de los temporizadores más comunes son setTimeout y setInterval.
     */
    setTimeout(() => {
        console.log('Han pasado 5 segundos');
      }, 5000);



      // Cancelar el temporizador
      clearTimeout(id);

      setInterval(() => {
        console.log('Han pasado 2 segundos');
      }, 2000);


      //Un ejemplo de promesa con setTimeout() podría verse así:

      function wait(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
                  const seconds = ms / 1000
            resolve(seconds);
          }, ms);
        });
      }
      
      // ejemplo de uso
      wait(2000).then((seconds) => {
        console.log(`Han pasado ${seconds} segundos`);
      });
      

      //Un ejemplo de promesa con setTimeout() que maneja errores podría verse así:
      30 días de JavaScript
30 días de JavaScript
LeoCode0

LeoCode0
Asincronismo
34/50

Lectura

JavaScript es un lenguaje asíncrono, lo que significa que las operaciones no bloquean el hilo de ejecución principal. Esto significa que varias operaciones pueden ocurrir al mismo tiempo sin afectar el rendimiento del programa. En lugar de bloquear el hilo de ejecución mientras se carga la imagen, el navegador carga la imagen en segundo plano y notifica al programa cuando está lista para ser utilizada mediante una función callback.
Promesas

Las promesas son un mecanismo para manejar operaciones asincrónicas en JavaScript de una manera más limpia y fácil de leer. Permiten que una función asíncrona devuelva una promesa, que es básicamente una forma de representar un valor que estará disponible en el futuro, ya sea de manera exitosa o con un error.

Para crear una promesa, se utiliza el constructor Promise, el cual acepta una función que a su vez recibe dos parámetros: resolve y reject. El primero se usa para indicar que la operación se ha completado correctamente y se puede obtener el valor, mientras que el segundo se usa para indicar que la operación ha fallado y se devuelve el error correspondiente.

Por ejemplo, podemos crear una promesa que resuelva (o devuelva) con el número 42 después de 2 segundos:

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});

Podemos encadenar promesas para ejecutar múltiples operaciones asincrónicas de manera secuencial. Para ello, se utiliza el método then de una promesa, el cual recibe como parámetro una función que se ejecutará cuando la promesa se resuelva correctamente. Esta función puede devolver otra promesa, lo que permite encadenar múltiples operaciones.

Por ejemplo, podemos crear una promesa que resuelva con un objeto que contenga el número 42 y una cadena después de 2 segundos, y luego encadenar otra promesa que devuelva una cadena que contenga el doble del número de la promesa anterior:

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ number: 42, text: "hello" });
  }, 2000);
});

promise
  .then((result) => {
    const doubledNumber = result.number * 2;
    return doubledNumber.toString();
  })
  .then((result) => {
    console.log(`The result is ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });

setInterval y setTimeout

Los temporizadores son una característica importante en JavaScript para programar tareas para que se ejecuten en el futuro. Dos de los temporizadores más comunes son setTimeout y setInterval.

setTimeout es una función que permite programar una tarea para que se ejecute después de un cierto período de tiempo en milisegundos. La función toma dos parámetros: la función que se debe ejecutar después del tiempo especificado y el tiempo en milisegundos antes de que se ejecute la función.

Por ejemplo, supongamos que queremos imprimir un mensaje después de 5 segundos. Podemos usar setTimeout de la siguiente manera:

setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);

Es importante tener en cuenta que setTimeout() devuelve un identificador único (un número) que puede ser utilizado para cancelar el temporizador antes de que se ejecute. Para hacer esto, podemos usar la función clearTimeout() y pasarle el identificador como argumento. Por ejemplo:

let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);

// Cancelar el temporizador
clearTimeout(id);

Otro temporizador común es setInterval. En contraste con setTimeout, setInterval se utiliza para programar una tarea para que se repita en un intervalo de tiempo determinado. La función toma dos parámetros: la función que se debe ejecutar en cada intervalo y la duración de cada intervalo en milisegundos.

Por ejemplo, supongamos que queremos imprimir un mensaje cada 2 segundos. Podemos usar setInterval de la siguiente manera:

setInterval(() => {
  console.log('Han pasado 2 segundos');
}, 2000);

Esto imprimirá “Han pasado 2 segundos” cada 2 segundos.

Es importante tener en cuenta que tanto setTimeout como setInterval son funciones asincrónicas. Esto significa que no bloquean la ejecución del código, lo que permite que otras tareas se ejecuten mientras se espera que se complete la tarea programada.

Para trabajar con temporizadores en conjunto con promesas, debes entender cómo se puede utilizar el método setTimeout() dentro de una promesa para crear una tarea asincrónica que se resolverá o rechazará después de un período de tiempo determinado.

Al crear una promesa con setTimeout(), podemos utilizar el constructor new Promise(). La función interna debe contener el código que se ejecutará en el futuro y, finalmente, llamará a resolve() o reject() para indicar si la tarea se completó correctamente o no.

Un ejemplo de promesa con setTimeout() podría verse así:

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			const seconds = ms / 1000
      resolve(seconds);
    }, ms);
  });
}

// ejemplo de uso
wait(2000).then((seconds) => {
  console.log(`Han pasado ${seconds} segundos`);
});
/*
En este ejemplo, la función wait() toma un argumento ms, que representa el número de milisegundos que se deben esperar antes de resolver la promesa. Dentro del constructor new Promise(), se llama a setTimeout() para crear una tarea asincrónica que llamará a resolve() después del número de milisegundos especificado. La función wait() devuelve la promesa creada.

Cuando se llama a wait(2000), se crea una nueva promesa que se resolverá después de 2 segundos. Después de que se resuelva la promesa, se llama a la función then() y se ejecuta la función de devolución de llamada, que simplemente registra con la variable seconds que es devuelta al resolverse la promesa un mensaje en la consola.

También podemos usar setTimeout() en conjunto con reject() para manejar errores en una tarea asincrónica. Si ocurre un error durante la ejecución de la tarea, podemos llamar a reject() con un objeto de error para indicar que la tarea ha fallado.

Un ejemplo de promesa con setTimeout() que maneja errores podría verse así:*/

function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("El número de milisegundos no puede ser negativo"));
    } else {
      setTimeout(() => {
				const seconds = ms / 1000
        resolve(seconds);
      }, ms);
    }
  });
}

// ejemplo de uso
wait(-2000)
  .then((seconds) => {
    console.log(`Han pasado ${seconds} segundos`);
  })
  .catch((error) => {
    console.error(error.message);
		// El número de milisegundos no puede ser negativo
  });

