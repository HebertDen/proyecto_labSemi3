export class WinnerClass {
    id: number = 0;
    nombre: string = '';
    email: string = '';
    cedula: number = 0;

    constructor(){ }

    setValues(item: any){
        this.id = item.id;
        this.nombre = item.nombre;
        this.email = item.email;
        this.cedula = item.cedula;
    }
}
