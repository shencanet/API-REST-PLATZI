/*En este desafío deberás crear un sistema de administración para un hotel.

El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel. La función recibirá un parámetro rooms, definirá el número total de habitaciones.*/

export function hotelSystem(rooms) {
    const cantHabitaciones = rooms
    const reservaciones = []
  
    //Creo una función para chequear si una habitación está disponible. Esta función revisa que exista el número de habitación y no se encuentre ocupada en las fechas seleccionadas
    const chequearDisponibilidad = (reservation) => {
      if (reservation['roomNumber'] > cantHabitaciones || reservation['roomNumber'] < 1) {
        throw new Error('La habitación no existe')
      }
      return reservaciones.some(reservaGuardada => {
        //Chequeo que la habitación que voy a analizar concuerde con el número de habitación de la reservación que recibí por parámetro
        return reservaGuardada['roomNumber'] === reservation['roomNumber'] && (
  
          //Si el checkIn de la nueva reservación se encuentra entre el checkIn de una vieja reserva y el checkOut de una vieja reserva, significa que la habitación está ocupada
          (reservation['checkIn'] >= reservaGuardada['checkIn']
            &&
            reservation['checkIn'] <= reservaGuardada['checkOut'])
  
          ||
  
          //Si el checkOut de la nueva reservación se encuentra entre el checkIn de una vieja reserva y el checkOut de una vieja reserva, significa que la habitación está ocupada
          (reservation['checkOut'] >= reservaGuardada['checkIn']
            &&
            reservation['checkOut'] <= reservaGuardada['checkOut'])
  
          ||
  
          //Si el checkIn de una vieja reserva se encuentra entre el checkIn de una nueva reserva y el checkOut de una nueva reserva, significa que la habitación está ocupada
          (reservaGuardada['checkIn'] >= reservation['checkIn']
            &&
            reservaGuardada['checkIn'] <= reservation['checkOut'])
        )
      })
    }
  
    return {
  
      //Función de búsqueda, retorna la reservación que concuerde con el id recibido por parámetro
      searchReservation: (id) => {
        let busqueda = reservaciones.find(reservacion => reservacion['id'] === id)
        if (!busqueda) {
          throw new Error('La reservación no fue encontrada')
        }
        return busqueda
      },
  
      //Esta función ordena ascendentemente las reservaciones a partir de su fecha de checkIn, primero hace una copia del array de reservaciones y luego convierte la fecha de checkIn en un número eliminando la barra que separa el mes del día (Ya que la fecha se almacena en formato mm/DD). y luego los compara. Guarda el array ordenado en "ordenadas" y lo retorna
      getSortReservations: () => {
        const ordenadas = reservaciones.slice().sort(
          (a, b) => parseInt(a['checkIn'].replace('/', '')) - parseInt(b['checkIn'].replace('/', '')))
        return ordenadas
      },
  
      //Esta función chequea la disponibilidad de la habitación, si existe y está disponible la agrega al arreglo reservaciones. Si no está disponible lanza un error
      addReservation: (reservation) => {
        const ocupada = chequearDisponibilidad(reservation)
  
        if (!ocupada) {
          reservaciones.push(reservation)
        } else {
          throw new Error('La habitación no está disponible')
        }
        return "Reservación confirmada"
      },
  
  
      //Esta función ubica el índice de una reservación a partir de su ID, luego guarda esa habitación en una variable, ejecuta el método splice para eliminar la reservación y retorna la reservación. Si no existe lanza un error
      removeReservation: (id) => {
        let indexReserva = reservaciones.findIndex((reserva) => reserva['id'] === id)
        if (indexReserva >= 0) {
          let reserva = reservaciones[indexReserva]
          reservaciones.splice(indexReserva, 1)
          return reserva
        } else {
          throw new Error('La reservación no existe')
        }
      },
  
      //Retorna el arreglo de reservaciones
      getReservations: () => {
        return reservaciones
      },
  
      //Ejecuta un for que va desde 1 hasta el máximo de habitaciones para chequear su disponibilidad en las fechas elegidas. Las que están disponibles se agregan al arreglo disponibles para ser retornadas
      getAvailableRooms: (checkIn, checkOut) => {
        const disponibles = []
  
        for (let i = 1; i <= cantHabitaciones; i++) {
          if (!chequearDisponibilidad(
            {
              'checkIn': checkIn,
              'checkOut': checkOut,
              'roomNumber': i
            }
          )) {
            disponibles.push(i)
          }
        }
  
        return disponibles
      }
  
    }
  }