export class AdminClass {
    id: string = '';
    nombre: string = '';
    email: string = '';
    cedula: number = 0

    constructor(){ }

    setValues(admin: any){
        this.id = admin.id;
        this.nombre = admin.nombre;
        this.email = admin.email;
        this.cedula = admin.cedula;
    }
}
