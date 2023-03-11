/*Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito con el cual se creó. Puedes entender los closures como: función interna + scope. Mira estos pasos:

    Genera una función que retorna una función interna.
    Esta función interna tiene un scope, el cual puede ser accedido únicamente por esta función, es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por la función interna.
    Como resultado, esta función interna retornada con su scope será nuestro closure.

Veamos la siguiente imagen para entenderlo mejor. En la imagen FUNCTION es la función interna de la cual hablamos.
image.png*/
function greeting() {
    let username = 'Oscar';
  
    function displayUserName() {
      return `Hello ${username}`;
    }
    return displayUserName;
  }
  
  const g = greeting();
  console.log(g); 
  console.log(g());
  //https://www.youtube.com/watch?v=JXG_gQ0OF74
  /*Ámbito léxico

El ámbito léxico se refiere al alcance de una variable siguiendo la cadena de scopes. Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario.*/

function contador ( i ) {
    let acumulador = i
    function aumentar () {
      console.log(acumulador);
      acumulador = acumulador + 1
    }
    return aumentar
  };
  
  const closure = contador(1)
  closure() // 1
  closure() // 2
  closure() // 3
  
  const closure2 = contador(10);
  closure2() // 10
  closure2() // 11
  
  closure() // 4

  /*
Podemos asignar la función contador a una variable (_closure_ y _closure2_). Dependiendo del valor que tenga como parámetro, cada variable cambiará el valor inicial por el ámbito léxico, por la que fue originada la variable acumulador que está vinculada con la función aumentar.
Ejemplo de closure

La mejor manera de entender un closure es por medio de un ejemplo práctico. Cuando declaramos una función dentro de nuestro global scope, estamos usando un closure.*/

var myVar = 'hi';
functionmyFunction() {
	console.log(myVar);
}
myFuntion(); // hi
/*Los closures son básicamente cuando aprovechamos la habilidad de JavaScript de emplear las variables que están en el scope padre de nuestro bloque de código, por eso el global scope es un closure grande. El bloque myFunction puede utilizar TODAS las variables que están disponibles en el bloque inmediato anterior. Usando el ejemplo visto en el video:

Si tú declaras la variable saveCoins en el global scope, estarías usando el mismo principio que si emplearas la segunda función que escribe el profesor porque estás usando las variables que están en el scope padre.*/

var saveCoins = 0;

const moneyBox = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
}

moneyBox(5); //5
moneyBox(10); //15

/*Sin embargo, está mal visto modificar variables globales, por eso es que quieres crear variables dentro de un scope cerrado y que interactúen entre ellas. Entonces, declaras las variables que vas a usar dentro del scope padre del bloque que las va a modificar para que siempre pueda acceder a ellas.

Para eso originas un nuevo “global scope” ficticio que va a conservar todas las variables que tú quieras monitorear. Ahora mira las similitudes entre el código de arriba y el que está justo abajo de aquí:*/
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
            saveCoins += coins;
            console.log(saveCoins);
        }
    return countCoins;
    }
    
    let myMoneyBox = moneyBox()
    myMoneyBox(4)
    myMoneyBox(10)
    myMoneyBox(6)
    //¡Si remueves " const moneyBox = () => {} " serían exactamente las mismas líneas de código!

    //const moneyBox = () => {
var saveCoins = 0;
const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }

   // return countCoins;
//}

/*Lo que estás haciendo es simplemente bajar un nivel tu scope. Quieres que la función moneyBox regrese una función que estuvo declarada dentro de sí misma porque esa función tiene acceso a ese scope que ya no va a existir para que alguien más lo utilice, solamente lo podrá emplear la función countCoins.

Al guardar el resultado de moneyBox (countCoins) en otra variable estás generando el ámbito léxico que menciona el profesor, necesario para no dejar morir ese scope.*/
