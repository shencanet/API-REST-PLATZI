Método replaceAll

El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.

Este método recibe dos argumentos:

    El patrón a reemplazar, puede ser un string o una expresión regular.
    El nuevo elemento que sustituye al reemplazado.

Este procedimiento fue creado para solucionar el problema que tenía el método replace, que realizaba la misma función de reemplazar elementos, pero solamente una sola vez por invocación.

const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")

Separadores numéricos

Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución del programa.

Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc.

// 🔽 Baja legibilidad
const numero1 = 3501548945
console.log( numero1 ) // 3501548945

// ✅ Alta legibilidad
const numero2 = 3_501_548_945
console.log( numero1 ) // 3501548945
