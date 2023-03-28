/*La herencia en JavaScript es un concepto fundamental de la programación orientada a objetos que nos permite crear nuevas clases a partir de clases existentes, heredando todas sus propiedades y métodos. Esto nos permite reutilizar el código existente y crear jerarquías de clases que comparten comportamiento común.

Aquí hay un ejemplo simple de una clase Animal que define una propiedad especie y un método hacerSonido():*/

class Animal {
  constructor(especie) {
    this.especie = especie;
  }
  hacerSonido() {
    console.log('Este animal hace un sonido');
  }
}
/*
Ahora podemos crear una clase derivada Perro que hereda de la clase Animal y añade una propiedad raza y un método ladrar():*/

class Perro extends Animal {
  constructor(especie, raza) {
    super(especie);
    this.raza = raza;
  }
  ladrar() {
    console.log('El perro está ladrando');
  }
}
/*
En este ejemplo, la clase Perro hereda de la clase Animal mediante la palabra clave extends. El constructor de Perro llama al constructor de Animal utilizando la palabra clave super() para inicializar la propiedad especie. Además, Perro añade una propiedad raza y un método ladrar().

Ahora podemos crear un objeto de la clase Perro y llamar a sus métodos y propiedades:

const miPerro = new Perro('Canino', 'Labrador');
console.log(miPerro.especie); // Canino
miPerro.hacerSonido(); // Este animal hace un sonido
miPerro.ladrar(); // El perro está ladrando

Como podemos ver, miPerro hereda la propiedad especie y el método hacerSonido() de la clase Animal, y también tiene su propia propiedad raza y método ladrar().

La herencia nos permite reutilizar el código existente y crear jerarquías de clases que comparten comportamiento común. También nos permite crear clases más específicas a partir de clases más generales, lo que nos permite crear código más modular y escalable.