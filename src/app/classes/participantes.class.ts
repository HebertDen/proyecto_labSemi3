export class ParticipantesClass {
    id: number = 0;
    numero: number = 0;
    cedula: string = '';

    constructor(){}

    setValues(id: number, numero: number, cedula: string){
        this.id = id;
        this.numero = numero;
        this.cedula = cedula;
    }
}
