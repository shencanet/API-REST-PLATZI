/*En alguna situación necesitarás manejar varias promesas y obtener sus resultados. ¿Cómo? Utilizando los métodos Promise.all y Promise.allSettled.
Promise.all

El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas.*/

Promise.all([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
/*
    El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas. Si al menos una promesa es rechazada, Promise.all será rechazada.
Promise.allSettled

Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.*/