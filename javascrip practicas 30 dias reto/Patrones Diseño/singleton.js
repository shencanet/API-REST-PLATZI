Singleton

Singleton es un patrón de diseño que se utiliza para asegurarse de que una clase tenga solo una única instancia durante toda la ejecución de un programa. Esto significa que, independientemente de cuántas veces se llame a la clase, solo se creará una única instancia y todas las llamadas posteriores se refieren a la misma instancia.

En JavaScript, el patrón Singleton se puede implementar de varias maneras, pero la más común es crear un objeto literal con una función que retorne la única instancia de la clase. Por ejemplo:

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Singleton'});
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // True

En este ejemplo, la función anónima se autoejecuta y retorna un objeto con un método getInstance(). Cada vez que se llama a getInstance(), se verifica si ya existe una instancia previa y, de ser así, se devuelve la misma instancia. De lo contrario, se crea una nueva instancia y se retorna.

Otro ejemplo de código es crear una clase y hacer uso de Object.freeze() para evitar la modificación de la instancia:

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.name = 'Singleton';
      Singleton.instance = Object.freeze(this);
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // True

En este caso, se crea una clase Singleton con un constructor que verifica si ya existe una instancia y, de ser así, retorna la misma instancia. De lo contrario, se crea una nueva instancia y se almacena como la única instancia permitida en el programa.

Singleton es útil en situaciones en las que se necesita una única instancia de una clase que se comparta entre diferentes partes del programa. Por ejemplo, en una aplicación de mensajería, podríamos utilizar Singleton para asegurarnos de que solo exista una única instancia de la clase que maneja la conexión con el servidor. De esta manera, podemos evitar la creación de múltiples conexiones al servidor, lo que podría resultar en un rendimiento ineficiente y posibles errores.

Otro ejemplo de aplicación de Singleton podría ser en un sistema de autenticación, donde se quiere asegurar que solo exista una única instancia de la clase que maneja la información del usuario autenticado. De esta manera, podemos mantener una única fuente de verdad para la información del usuario autenticado y evitar posibles errores que pueden surgir de tener múltiples instancias de la misma clase.

Es importante tener en cuenta que Singleton puede ser una solución útil en ciertos casos, pero también puede ser un anti-patrón si se usa en exceso o en situaciones donde no es necesario. Es importante evaluar cuidadosamente si Singleton es la solución adecuada para un problema específico antes de implementarlo.
Factory pattern

El patrón Factory es una técnica que permite crear objetos sin tener que especificar la clase exacta de dicho objeto. En su lugar, la fábrica (o factory) se encarga de determinar la clase correcta en tiempo de ejecución y crear una instancia de dicha clase.

En JavaScript, el patrón Factory se puede implementar de varias maneras, pero una de las más comunes es crear una función que retorne un objeto con las propiedades y métodos necesarios. Por ejemplo:

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
}

const person1 = createPerson('John', 30);
const person2 = createPerson('Jane', 25);

console.log(person1.name); // 'John'
console.log(person2.age); // 25
person1.sayHello(); // 'Hello, my name is John'

En este ejemplo, la función createPerson() toma dos argumentos (nombre y edad) y retorna un objeto con las propiedades name, age y el método sayHello(). Cada vez que se llama a la función createPerson(), se crea un nuevo objeto con las propiedades y métodos especificados.

Otro ejemplo de código es crear una clase Factory:

class PersonFactory {
  createPerson(name, age) {
    return {
      name: name,
      age: age,
      sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
  }
}

const factory = new PersonFactory();
const person1 = factory.createPerson('John', 30);
const person2 = factory.createPerson('Jane', 25);

console.log(person1.name); // 'John'
console.log(person2.age); // 25
person1.sayHello(); // 'Hello, my name is John'

En este caso, se crea una clase PersonFactory con un método createPerson() que toma dos argumentos y retorna un objeto con las propiedades y métodos especificados. Cada vez que se llama a createPerson(), se crea un nuevo objeto con las propiedades y métodos especificados.

El patrón Factory es útil en situaciones en las que se necesita crear objetos con diferentes propiedades y métodos sin tener que especificar la clase exacta de dicho objeto. Por ejemplo, en una aplicación de comercio electrónico, podríamos utilizar Factory para crear objetos Producto con diferentes atributos como nombre, precio, descripción y categoría, y utilizar la fábrica para crear objetos Producto específicos para cada producto en nuestro catálogo de productos.

Además, el patrón Factory también es útil cuando se desea ocultar la implementación detrás de la creación de objetos. Por ejemplo, si estamos trabajando con una biblioteca de terceros y queremos crear objetos de una clase determinada, podemos utilizar una fábrica para crear objetos en lugar de tener que conocer la implementación detrás de la creación de objetos en la biblioteca de terceros.
