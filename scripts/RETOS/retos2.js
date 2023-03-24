
/*
En este desafío, deberás crear tu propia implementación de filter para el prototype de los arrays.

Esto implica agregar un nuevo método llamado myFilter al prototype de los arrays, el cual permitirá filtrar elementos de manera similar al método filter nativo del lenguaje. El objetivo es poder usar el método myFilter de la siguiente manera:

Ejemplo 1:*/


const array = [1,2,3,4,5,6]

array.myFilter(num => num % 2 === 0)

Output: [2,4,6]

//Ejemplo 2:




const arr = [
  {
    name: "Juan",
    age: 10,
  },
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
];

array.myFilter((person) => person.age > 18)

Output: [
  {
    name: "Pedro",
    age: 20,
  },
  {
    name: "Maria",
    age: 30,
  },
]

//mi resultado
export function arrayModified() {
    Array.prototype.myFilter = function (funcion) {
      let arrayMap = [];
      for (let prop of this) {
        funcion(prop) ? arrayMap.push(prop) : prop;
      }
      return arrayMap;
    }
  }

  /*1
2
3
4

Intentos

En este desafío, deberás crear la lógica para un automóvil mediante el uso de clases.

Deberás implementar la lógica necesaria en la clase Car de tal manera que nos pueda servir de base para crear nuevos autos que reciba los siguientes parametros:

    brand: Marca del auto
    model: Modelo del auto
    year: Año del auto
    mileage: kilometraje del auto
    state: El estado por defecto del auto será false, indicando que el auto se encuentra apagado.

Además, deberás implementar los siguientes métodos para hacer funcional los vehículos creados con la clase Car

    turnOn(): Método que encenderá el auto.
    turnOff(): Método que apagará el auto.
    drive(kilometers): Con este método podremos aumentar el kilometraje según los kilómetros dados pero solo si el auto está encendido. En caso contrario, deberá mostrar el siguiente mensaje de error: "El auto está apagado".

Ejemplo 1:

Input:*/
const toyota = new Auto("Toyota", "Corolla", 2020, 0);
toyota.turnOn();
toyota.drive(100);
toyota.mileage

Output: 100

//Ejemplo 2

const toyota2 = new Auto("Toyota", "Corolla", 2020, 0);
toyota2.turnOff()
toyota2.drive(100)

Output: Error("El auto está apagado")*/

export class Car {
    constructor(brand, model, year, mileage) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
      this.state = false;
    }
  
    turnOn() {
      this.state = true;
    }
  
    turnOff() {
      this.state = false;
    }
  
    drive(kilometers) {
  
      if (this.state) {
        this.mileage  += kilometers;
      } else {
        throw new Error('El auto está apagado')
      }
      
    }
  
  }