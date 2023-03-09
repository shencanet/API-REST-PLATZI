/*1
2
3
4

Intentos

En este desafío tendrás que procesar una lista de compras.

Deberás implementar la lógica de la función processShoppingList de tal manera que esta módifique el array original de la siguiente manera

    Si el nombre del producto incluye la palabra "oferta", se debe aplicar un descuento del 20% al precio del producto.
    Multiplicar el precio del producto por su cantidad
    Eliminar el atributo quantity una vez hecho lo anterior.

Finalmente, debes retornar el total de la suma de todos los productos de la lista modificada.*/

export function processShoppingList(list) {
    let indexFind = list.findIndex(item => item.name.includes("oferta"));
    if (indexFind >= 0)
      list[indexFind].price = list[indexFind].price - (list[indexFind].price * (20 / 100));
  
    let total = 0;
  
    list = list.map(item => {
  
      item.price *= item.quantity;
      delete item['quantity'];
      total += item.price;
    })
  
    return (total);
  }