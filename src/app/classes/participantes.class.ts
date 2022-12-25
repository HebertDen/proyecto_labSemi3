export class ParticipantesClass {
    // [x: string]: any;
    numero: number = 0;
    cedula: string = "";

    constructor(){}

    setValues(numero: number, cedula: string){
        this.numero = numero;
        this.cedula = cedula;
    }
}
