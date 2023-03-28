1
2
3
4
5
6
7
8
9
10
11
12

Intentos

En este desafío, debes crear una jerarquía de clases mediante el uso de la herencia.

La clase base será Animal con las propiedades name, age y species y un método getInfo que devuelve un objeto con la información del animal.

Luego, debes crear una clase Mammal que herede de Animal y tenga una propiedad adicional hasFur y un método getInfo que sobreescriba al del padre y incluya la información de hasFur.

Finalmente, debes crear una clase Dog que herede de Mammal y tenga una propiedad adicional breed y un método getInfo que sobreescriba al del padre y incluya la información de breed, al igual que el método bark que devuelva el string "woof!".

Ejemplo 1


Input:
const bird = new Animal("pepe", 1, "bird")
bird.getInfo()

Output:

{
  name: "pepe",
  age: 1,
  specie: "bird",
}

Ejemplo 2


Input:
const hippo = new Mammal("bartolo", 3, "hippo", false)
hippo.getInfo()

Output:

{
  name: "bartolo",
  age: 3,
  specie: "hippo",
  hasFur: false,
}

Ejemplo 3


Input:
const dog = new Dog("fido", 4, "pastor aleman", true);
dog.bark()

Output:
"woof!"1

//resultado
export class Animal {
    constructor(name, age, specie) {
      this.name = name;
      this.age = age;
      this.specie = specie;
    }
    getInfo() { 
      return this
    }
  }
  
  export class Mammal extends Animal{
    constructor(name, age, specie, hasFur) { 
    super(name, age, specie);
    this.hasFur = hasFur;
    }
    getInfo() { 
      return {...this, ...this.hasFur}
    }
  }
  
  export class Dog extends Mammal {
    constructor(name, age, breed, hasFur, specie="dog") { 
      super(name, age, specie, hasFur);
      this.breed = breed;
    }
    getInfo() {
      return this
    }
    bark() { 
      return "woof!"
    }
  }