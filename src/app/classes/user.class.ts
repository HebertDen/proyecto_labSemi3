export class UserClass {
    id: number = 0;
    nombre: string = "";
    telefono: number = 0;
    email: string = "";
    cedula: string = '';

    constructor(){}

    setValues(item: any ){
        this.id = item.id;
        this.nombre = item.nombre;
        this.telefono = item.telefono;
        this.email = item.email;
        this.cedula = item.cedula;
    }
}
