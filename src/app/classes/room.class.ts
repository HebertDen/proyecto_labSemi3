export class RoomClass {
    id: string = '';
    numero: number = 0;
    capacidadTotal: number = 0;
    capacidadActual: number = 0;
    precio: number = 0;
    ingresoTotal: number = 0;
    tiempo: string = '';
    participantes = [
        {
            id: 0,
            numero: 0,
            cedula: ''
        }
    ]

    constructor() { }

    setValues(item: any) {
        this.id = item.id;
        this.numero = item.numero;
        this.capacidadTotal = item.capacidadTotal;
        this.capacidadActual = item.capacidadActual;
        this.precio = item.precio;
        this.ingresoTotal = item.ingresoTotal;
        this.tiempo = item.tiempo;
        this.participantes = item.participantes;
    }
}
