/*Parámetro opcional de catch

El parámetro opcional de catch permite omitir el error si es necesario*/

try {
    // Manejar el código
  } catch (err) {
    // Se utiliza el parámetro `err`
  }
  
  try {
    // Manejar el código
  } catch {
    // Manejar el error sin el parámetro.
  }

  /*Cómo transformar un array de arrays en un objeto

El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries(*/
const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
  ] 
  
  const usuario = Object.fromEntries(arrayEntries) 
  
  console.log(usuario)
  /* {
    name: 'Andres',
    email: 'andres@correo.com',
    age: 23
  }
  */