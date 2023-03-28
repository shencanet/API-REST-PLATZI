Promise.any

Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas.

const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve("Promesa 3")


Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promise 3
    .catch(error => console.log(error))
    const array = ["one", "two", "three", "four", "five", "six"];

    console.log(array[array.length - 1]);
    console.log(array.at(-1));
    ´


import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

//export { products };

//import { products } from "./products.js";

console.log(products);
console.log("Hey!!");