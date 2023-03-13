/*Debugging es el término para solucionar bugs. Los bugs (“bichos” en inglés) son errores en la aplicación, saber cómo solucionarlos de manera eficiente es clave para tu desarrollo como profesional.

Todo navegador dispone de Dev tools o herramientas de desarrollador, que es un conjunto de características del código de la página web, una de estas es el debugging.

La consola del navegador es importante para ver qué está pasando con el código generado. La consola se muestra con la combinación de teclas F12 / Ctrl + Shift + I / Cmd+Opt+I o clic derecho e “Inspeccionar” en tu navegador preferido (de preferencia Google Chrome).
Código de ejemplo

El código de ejemplo que se usará en las Dev Tools será el siguiente:*/

var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
  }
}

hello()

var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
    debugger // <---- Palabra reservada para debbuging
  }
}

[1, 2, 3].map((num) => {
    if (typeof num === 'number') return;
    return num * 2;
  });
  nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); }; 
/*
  Respuesta Correcta: C) [undefined, undefined, undefined]
  El método `map` es propio del paradigma de la programación funcional. Este método siempre retorna una nuevo arreglo.

En el ejemplo, puesto que estamos iterando sobre un arreglo de números, la condición evaluaerá `true` para cada uno de los elementos del arreglo, pero hay 2 sentencias `return`. JavaScript ignora todo el código que esta después del primer `return` que encuntra. Dicho esto, tendríamos algo así:

[1, 2, 3].map(num => { if (typeof num === "number") return; });

Ahora, si bien la condición se evalua a `true`, el `return` no devuelve nada, simplemente hace que el código se salga del `map`.

Cuando no devolvemos nada en `return`, `map` regresa siempre `undefined`.

Al tener 3 elementos en el arreglo, y recordando siempre que map regresa un nuevo arreglo, obtenemos como resultado final un arreglo de 3 `undefined`*/