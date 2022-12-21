export class RoomClass {
    id: string = '';
    numero: number = 0;
    capacidadTotal: number = 0;
    capacidadActual: number = 0;
    precio: number = 0;
    ingresoTotal: number = 0;
    horas: number = 0;
    minutos: number = 0;
    segundos: number = 0;
    participantes = [
        {
            id: 0,
            numero: '',
            cedula: '',
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
        this.horas = item.horas;
        this.minutos = item.minutos;
        this.segundos = item.segundos;
        this.participantes = item.participantes;
    }
}
