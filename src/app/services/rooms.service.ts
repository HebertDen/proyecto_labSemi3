import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

// import { Room } from '../interfaces/room.interface'; //-> TODO:: ALTERNATIVA 1
import { RoomClass } from '../classes/room.class'; //-> TODO:: ALTERNATIVA 2

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

  // recibir
  public room = new RoomClass();
  public rooms: RoomClass[] = [];

  public fecha = new Date();
  public tiempo: string = this.fecha.getHours() + ':' + this.fecha.getMinutes() + ':' + this.fecha.getSeconds();

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
    console.log("Service: "+id)
    return this.http.get<RoomClass>(this.apiUrl+'/'+id)
      .pipe(
        map((res: any) => {
          console.log(res);
          if(res){
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
          if(res){
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
    return this.http.put<RoomClass>(this.apiUrl+'/'+room.id, room, this.httpOptions)
      .pipe(
        map((res: any) => {
          if(res){
            this.room = new RoomClass();
            this.room.setValues(res);
            this.room$.next(this.room);
          }
        }),
        catchError((err) => of(err))
      )
  }

  deleteRoom(room: RoomClass): Observable<RoomClass> {
    return this.http.delete<RoomClass>(this.apiUrl+'/'+room.id)
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
}
