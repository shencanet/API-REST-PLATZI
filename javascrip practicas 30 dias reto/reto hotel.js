/*En este desafío deberás crear un sistema de administración para un hotel.

El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel. La función recibirá un parámetro rooms, definirá el número total de habitaciones.*/

function hotelSystem(rooms) {
    let reservations = [];
    let quantity_rooms = rooms;
    return {
        addReservation: function (reservation) {
            const date_start = new Date(reservation.checkIn);
            const date_end = new Date(reservation.checkOut);
            let reservarion_find = reservations.find(reservation_list => {
                const re_start = new Date(reservation_list.checkIn);
                const re_end = new Date(reservation_list.checkOut);
                return date_start.getTime() >= re_start.getTime() && date_end.getTime() <= re_end.getTime() && reservation.roomNumber == reservation_list.roomNumber;
            });

            if (reservarion_find == undefined) {
                reservations.push(reservation);
                return "se ha registrado correctamente";
            }
            throw new Error("La habitación no está disponible");
        },
        searchReservation: function (id) {
            const index_reservation = reservations.findIndex(
                reservation => reservation.id == id
            );
            if (reservations > 0) {
                return reservations[index_reservation];
            }
            throw new Error("La reservación no fue encontrada");
        },
        getReservations: function () {
            return reservations;
        },
        getSortReservations: function () {
            return [...reservations].sort((reservation1, reservation2) => {
                const check1 = new Date(reservation1.checkIn);
                const check2 = new Date(reservation2.checkIn);
                return check1.getTime() - check2.getTime();
            });
        },
        searchReservation: function (id) {
            let reservation_searched = reservations.find(
                reservation => reservation.id == id
            );
            if (reservation_searched == undefined) 
                throw new Error("La reservación no fue encontrada");
            return reservation_searched;
        },
        removeReservation: function (id) {
            let reservation_index = reservations.findIndex(reservation => reservation.id===id);
            if (reservation_index == -1) throw new Error("La reservación que se busca remover no existe");
            let remove_reservation = reservations[reservation_index];
            reservations.splice(reservation_index,1);
            return remove_reservation;
        },
        getAvailableRooms: function (checkIn, checkOut) {
            let rooms_available = [];
            let rooms_fill = [];
            let date_start = new Date(checkIn);
            let date_end = new Date(checkOut);
            reservations.forEach(reservation_list => {
                let reservation_start = new Date(reservation_list.checkIn);
                let reservation_end = new Date(reservation_list.checkOut);
                if (reservation_start.getTime() >= date_start.getTime() || reservation_end.getTime() <= date_end.getTime()) {
                    rooms_fill.push(reservation_list.roomNumber);
                }
            });
            for (let i = 1; i <= quantity_rooms; i++) {
                if (!rooms_fill.includes(i)) {
                    rooms_available.push(i);
                }
            }
            return rooms_available;
        }
    }
}