37
38
39
40
41
42
43
44
45
46
47
48
49
50
51

Intentos

En este desafío, debes implementar la lógica de la clase "Usuario" que represente un usuario en una red social y utilizar encapsulamiento para proteger sus datos privados.

La clase debe tener las siguientes variables privadas:

    name
    age
    friends (array de objetos Usuario)
    messages (array de strings)

Además, debes proporcionar los siguientes métodos públicos:

    addFriend(friend): agrega un usuario a la lista de amigos del usuario actual.
    sendMessage(message, friend): agrega un mensaje a la lista de mensajes del usuario actual y al amigo especificado.
    showMessages(): devuelve la lista de mensajes del usuario actual.

También debes tener definidos los getters y setters para acceder a los datos privados como el nombre y la edad, los cuales pueden ser modificados mediante su propio setter.

Ejemplo 1:


Input:

const usuario1 = new Usuario("Juan", 20);
const usuario2 = new Usuario("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

usuario1.showMessages()

Output:

["Hola Maria!"]

Ejemplo 2:


Input:

const usuario1 = new Usuario("Juan", 20);
usuario1.name = "Pepito"
console.log(usuario1.name)

Output:

"Pepito"



resultado
export class User {
    // Tu código aquí 👈
    constructor(name, age) {
      this._name = name
      this._age = age
      this._friends = []
      this._messages = []
    }
  
    addFriend(friend) {
      this._friends.push(friend)
    }
  
    sendMessage(message, friend) {
      const index = this._friends.findIndex((f) => friend.name === f.name)
      console.log(this._friends[index])
      this._friends[index].messages.push(message)
      this._messages.push(message)
    }
  
    showMessages() {
      return this._messages
    }
  
    get age() {
      return this._age
    }
    
    set age(value) {
      this._age = value
    }
  
    get name() {
      return this._name
    }
  
    set name(value) {
      this._name = value
    }
  
    get messages() {
      return this._messages
    }
  
    set messages(value) {
      this._messages = value
    }
  
  }
  