/*Si creamos una alcancía de la siguiente manera, solamente mostrará el valor enviado, no guardará la información del dinero que le enviamos.*/
function alcancia(monedas){
    let contenido = 0
    contenido = contenido + monedas
    return contenido
}

const miAlcancia = alcancia
miAlcancia(5) // 5
miAlcancia(4) // 4

function alcancia(cantidadInicial){
    let contenido = cantidadInicial
    return function guardar(monedas){
      contenido = contenido + monedas
      return contenido
    }
  }
  
  const miAlcancia = alcancia(2)
  miAlcancia(5) // 7
  miAlcancia(4) // 11
  
  const otraAlcancia = alcancia(5)
  otraAlcancia(30) // 35
  otraAlcancia(20) // 55

  //ejemplo
  const maestro = "Dios";

function crearFamilia() {
  const abuela = "carlina";

  function hijosAbuela() {
    const hijoOne = "Martha";
    const hijoTwo = "Evelio";
    const hijoThree = "Rocio";

    function hijosDeHijosAbuela() {
      const hijosRocio = [{ nombre: "juan" }, { nombre: "andrea" }];
      const hijosMatha = [{ nombre: "Fabian" }, { nombre: "Heidy" }];
      const hijosEvelio = [
        { nombre: "Nathy" },
        { nombre: "Juancho" },
        { nombre: "Santiago" },
      ];
      return {
        generacion: function () {
          console.log(`
${maestro} crea a mi abuela ${abuela}
la abuela tuvo 3 hijos ${hijoOne} ${hijoTwo} ${hijoThree}
los hijos de la abuela tienen hijos. Rocio: ${hijosRocio[0].nombre} y  ${hijosRocio[1].nombre}
Martha: ${hijosMatha[0].nombre} y  ${hijosMatha[1].nombre}
Evelio: ${hijosEvelio[0].nombre} ${hijosEvelio[1].nombre} y ${hijosEvelio[2].nombre}
		`);
        },
      };
    }
    return hijosDeHijosAbuela();
  }
  return hijosAbuela();
}

const generar = crearFamilia();
console.log(generar.generacion()); 