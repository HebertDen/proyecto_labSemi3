export class RoomClass {
    [x: string]: any;
    id: string = "";
    numero: number = 0;
    capacidadTotal: number = 0;
    capacidadActual: number = 0;
    precio: number = 0;
    ingresoTotal: number = 0;
    tiempo: string = "";
    participantes = [
        {
            numero: 0,
            cedula: ""
        }
    ];

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
