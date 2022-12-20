import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

// import { Room } from '../interfaces/room.interface'; //-> TODO:: ALTERNATIVA 1
import { WinnerClass } from '../classes/winner.class'; //-> TODO:: ALTERNATIVA 2

// CRUD

@Injectable({
  providedIn: 'root'
})
export class WinnersService {
  private apiUrl = environment.api + 'winners';


  // transmitir
  public winner$ = new Subject<WinnerClass>();
  public winners$ = new Subject<WinnerClass[]>();

  // recibir
  public winner = new WinnerClass();
  public winners: WinnerClass[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAll$(): Observable<WinnerClass[]> {
    return this.winners$.asObservable();
  }

  getAll(): Observable<any> {
    return this.http.get<WinnerClass[]>(this.apiUrl)
      .pipe(
        map((res: any) => {
          console.log(res);
          res.forEach((item: any) => {
            this.winner = new WinnerClass()
            this.winner.setValues(item)
            this.winners.push(this.winner)
          });
          this.winners$.next(this.winners)
        }),
        catchError((err) => of(err))
      );
  }

  get$(): Observable<WinnerClass> {
    return this.winner$.asObservable();
  }

  get(id: string | null): Observable<any> {
    return this.http.get<WinnerClass>(this.apiUrl)
      .pipe(
        map((res: any) => {
          console.log(res);
          if(res) {
            this.winner = new WinnerClass()
            this.winner.setValues(res)
            this.winner$.next(this.winner)
          };
        }),
        catchError((err) => of(err))
      );
  }

}
