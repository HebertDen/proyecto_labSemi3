export class RoomClass {
    id: string = '';
    numero: number = 0;
    capacidadTotal: number = 0;
    capacidadActual: number = 0;
    precio: number = 0;
    ingresoTotal: number = 0;
    participantes!: [
        {}
    ]

    constructor(){}

    setValues(item: any){
        this.id = item.id;
        this.numero = item.numero;
        this.capacidadTotal = item.capacidadTotal;
        this.capacidadActual = item.capacidadActual;
        this.precio = item.precio;
        this.ingresoTotal = item.ingresoTotal;
        this.participantes = item.participantes;
    }
}
