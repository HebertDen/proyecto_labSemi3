export class ParticipantesClass {
    id: number = 0;
    numero: string = '';
    cedula: string = '';

    constructor(){}

    setValues(id: number, numero: string, cedula: string){
        this.id = id;
        this.numero = numero;
        this.cedula = cedula;
    }
}
