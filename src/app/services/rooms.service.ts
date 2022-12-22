import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

// import { Room } from '../interfaces/room.interface'; //-> TODO:: ALTERNATIVA 1
import { RoomClass } from '../classes/room.class'; //-> TODO:: ALTERNATIVA 2
import { UserClass } from '../classes/user.class';

// CRUD

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private apiUrl = environment.api + 'rooms';

  // public rooms?: Room

  // MÉTODO CON CLASS - transmitir
  public room$ = new Subject<RoomClass>();
  public rooms$ = new Subject<RoomClass[]>();
  public tiempo$ = new Subject<RoomClass>();

  // recibir
  public room = new RoomClass();
  public rooms: RoomClass[] = [];
  public tiempo = new RoomClass();
  public win: any[] = [];

  public min: number = 1;
  public max: number = 0;
  public weigth: number = 0;
  public value: number = 0;

  // OPCIONES PARA IDENTIFICAR EL TIPO DE LOS DATOS QUE SERÁN TRAÍDOS
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  getAll$(): Observable<RoomClass[]> {
    return this.rooms$.asObservable();
  }

  getAll(): Observable<any> {
    this.rooms = [];
    return this.http.get<RoomClass[]>(this.apiUrl)
      .pipe(
        map((res: any) => {
          console.log(res);
          res.forEach((item: any) => {
            this.room = new RoomClass()
            this.room.setValues(item)
            this.rooms.push(this.room)
          });
          this.rooms$.next(this.rooms)
        }),
        catchError((err) => of(err))
      );
  }

  get$(): Observable<RoomClass> {
    return this.room$.asObservable();
  }

  get(id: string | null): Observable<any> {
    this.room = new RoomClass;
    console.log("Service: " + id)
    return this.http.get<RoomClass>(this.apiUrl + '/' + id)
      .pipe(
        map((res: any) => {
          console.log(res);
          if (res) {
            this.room = new RoomClass();
            this.room.setValues(res);
            this.room$.next(this.room);
          }
        }),
        catchError((err) => of(err))
      );
  }

  createRoom(room: RoomClass): Observable<RoomClass> {
    return this.http.post<RoomClass>(this.apiUrl, room, this.httpOptions)
      .pipe(
        map((res: any) => {
          if (res) {
            this.room = new RoomClass();
            this.room.setValues(res);
            this.room$.next(this.room);
          }
          console.log("Creada");
        }),
        catchError((err) => of(err))
      );
  }

  updateRoom(room: RoomClass): Observable<RoomClass> {
    console.log("Servicio");
    return this.http.put<RoomClass>(this.apiUrl + '/' + room.id, room, this.httpOptions)
      .pipe(
        map((res: any) => {
          if (res) {
            this.room = new RoomClass();
            this.room.setValues(res);
            this.room$.next(this.room);
          }
        }),
        catchError((err) => of(err))
      )
  }

  deleteRoom(room: RoomClass): Observable<RoomClass> {
    return this.http.delete<RoomClass>(this.apiUrl + '/' + room.id)
      .pipe(
        map(() => {
          console.log("Eliminada")
        }),
        catchError((err) => of(err))
      );
    // MÉTODO ALTERNATIVO
    // const url = `${this.apiUrl}/${room.id}`;
    // return this.http.delete<RoomClass>(url);
  }

  aleatorioWin(room: RoomClass): any { // Ganador
    this.weigth = room.participantes.length; // Peso
    console.log('El peso: ' + this.weigth);
    // Valor random para la posición
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.weigth);
    this.value = Math.floor(Math.random() * (this.min - this.max + 1) + this.min);
    console.log('Mínimo: ' + this.min + 'Máximo: ' + this.max + 'Valor: ' + this.value);
    // Búsqueda de la posción del valor
    for (let index = 0; index < room.participantes.length; index++) {
      if (index === this.value) {
        this.win.push(room.participantes[index]);
      }
    }
    console.log("Ganador: " + this.win);
    return this.win; // Retorna el array del ganador
  }

  conteoRoom$(): Observable<RoomClass> {
    return this.tiempo$.asObservable();
  }

  // conteoRoom(room: RoomClass): Observable<any> {
    
  //   return algo;
  // }

}
