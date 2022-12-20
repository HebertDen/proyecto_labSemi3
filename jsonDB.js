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
                "capacidadTotal": 35,
                "capacidadActual": 20,
                "precio": 8000,
                "ingresoTotal": 1500000,
                participantes: [
                    {}
                ]

            },
            {
                "id": 2,
                "numero": 2,
                "capacidadTotal": 35,
                "capacidadActual": 15,
                "precio": 12000,
                "ingresoTotal": 1500000,
                participantes: [
                    {}
                ]
            },
            {
                "id": 3,
                "numero": 3,
                "capacidadTotal": 35,
                "capacidadActual": 2,
                "precio": 15000,
                "ingresoTotal": 1500000,
                participantes: [
                    {}
                ]
            },
            {
                "id": 4,
                "numero": 4,
                "capacidadTotal": 47,
                "capacidadActual": 1,
                "precio": 16000,
                "ingresoTotal": 1500000,
                participantes: [
                    {}
                ]
            },
            {
                "id": 5,
                "numero": 5,
                "capacidadTotal": 50,
                "capacidadActual": 16,
                "precio": 5000,
                "ingresoTotal": 1500000,
                participantes: [
                    {}
                ]
            }
        ]
    }

    return data;
}