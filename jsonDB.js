module.exports = function () {
    var data = {
        admin: {
            "id": 1,
            "nombre": "Hebert",
            "email": "hebert@hebert.com",
            "cedula": 123456
        },
        users: [
            {
                "id": 1,
                "nombre": "carlos",
                "telefono": 12345,
                "email": "carlos@gmail.com",
                "cedula": 10001,
                "sorteo": {
                    "numero": 1,
                    "numero_sala": 1
                }
            },
            {
                "id": 2,
                "nombre": "felipe",
                "telefono": 3125,
                "email": "felipe@outlook.com",
                "cedula": 20002,
                "sorteo": {
                    "numero": 45,
                    "numero_sala": 2
                }
            }
        ],
        winners: [
            {
                "id": 1,
                "nombre": "carlos",
                "email": "carlos@gmail.com",
                "cedula": 10001,
            }
        ],
        rooms: [
            {
                "id": 1,
                "numero": 1,
                "capacidadTotal": 50,
                "capacidadActual": 15,
                "precio": 1500,
                "ingresoTotal": 15000,
                "horas": 0,
                "minutos": 20,
                "segundos": 0,
                participantes: []
            },
            {
                "id": 2,
                "numero": 2,
                "capacidadTotal": 35,
                "capacidadActual": 15,
                "precio": 1500,
                "ingresoTotal": 15000,
                "horas": 0,
                "minutos": 30,
                "segundos": 0,
                participantes: []
            },
        ]
    }

    return data;
}