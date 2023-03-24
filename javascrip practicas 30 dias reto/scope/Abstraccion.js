/*La abstracción permite definir una interfaz clara y simplificada para interactuar con un objeto o clase, sin tener que conocer los detalles internos de cómo se implementa esa funcionalidad. En JavaScript, la abstracción se puede lograr utilizando clases y métodos.

Por ejemplo, imaginemos que estamos construyendo una aplicación de un e-commerce que tiene diferentes tipos de productos, como libros, ropa y electrónicos. Podríamos definir una clase Product como una abstracción de los diferentes tipos de productos, con propiedades como name, price y description.*/

class Product {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  
    show() {
      console.log(`Nombre: ${this.name}`);
      console.log(`Precio: ${this.price}`);
      console.log(`Descripción: ${this.description}`);
    }
  }
/*En este ejemplo, la clase Product define una interfaz clara y simplificada para interactuar con un objeto Product. Los usuarios de nuestra aplicación solo necesitan conocer las propiedades name, price y description para poder trabajar con los productos, y no necesitan conocer los detalles internos de cómo se implementa la clase Product.

Podríamos luego crear subclases de la clase Product para representar los diferentes tipos de productos, como Book, Clothes y Electronic. Por ejemplo, podríamos definir la clase Book de la siguiente manera:*/
// Libro hereda las propiedades y métodos de la clase Producto
class Book extends Product {
    constructor(name, price, description, author, editorial) {
      // Recuerda que con Super le pasamos los atributos a la clase
      // de la cual se hereda
      super(name, price, description);
      // define nuevas propiedades como autor y editorial 
      this.author = author;
      this.editorial = editorial;
    }
  
    show() {
      super.show();
      // redefine el método mostrar() para mostrar esta información adicional.
      console.log(`Autor: ${this.author}`);
      console.log(`Editorial: ${this.editorial}`);
    }
  }

  /*En este ejemplo, la clase Book hereda las propiedades y métodos de la clase Product, pero también define nuevas propiedades como author y editorial y redefine el método show() para mostrar esta información adicional.*/

