/*En ECMAScript 2017 o ES8 fue añadida una nueva forma de manejar el asincronismo en JavaScript mediante funciones asíncronas.
Cómo utilizar funciones asíncronas

La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.*/
async function asyncFunction () {...}

const asyncFunction = async () => { ... } 
/*La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.*/
async function asyncFunction () {
  try {
    const response = await promesa()
    return response
  } catch (error) {
    return error
  }
}

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ("AsynC!!"), 2000)
        : reject(new Error("Error"));
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log("Hello");
}

console.log("before");
anotherFn();
console.log("After");

const fnAsync = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve ('Luego de esperar 2 segundos'),2000)
            :reject(new Error('Error!'));
    });
}

const anotherFn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Antes');
anotherFn();
console.log('Despues');