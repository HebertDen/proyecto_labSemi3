export class WinnerClass {
    id: number = 0;
    id_user: number = 0;
    cedula: number = 0

    constructor(){ }

    setValues(item: any){
        this.id = item.id;
        this.id_user = item.id_user;
        this.cedula = item.cedula;
    }
}
