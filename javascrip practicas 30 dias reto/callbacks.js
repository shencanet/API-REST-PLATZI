/*Los callbacks son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de que se complete la operación asíncrona. Un callback es una forma de manejar la respuesta de una promesa. */

function getUserData(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error))
  }
  
  function displayUserData(data) {
    console.log(data.name);
  }
  
  getUserData(1, displayUserData);

  operation1()
  .then(result1 => {
    return operation2(result1);
  })
  .then(result2 => {
    return operation3(result2);
  })
  .then(result3 => {
    return operation4(result3);
  })
  .then(result4 => {
    // ...continuar con más operaciones
  })
  .catch(error => {
    // Manejar errores
  });

/*Async/await es una forma más moderna y legible de manejar promesas. En lugar de usar callbacks anidados, async/await permite que el código parezca más secuencial y fácil de leer. */
  async function getUserData(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function displayUserData(userId) {
    const data = await getUserData(userId);
    console.log(data.name);
  }
  
  displayUserData(1);
  
  