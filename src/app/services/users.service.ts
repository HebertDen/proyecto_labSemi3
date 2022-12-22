import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

import { UserClass } from '../classes/user.class';

// CRUD

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.api + 'users';

  public user$ = new Subject<UserClass>();
  public users$ = new Subject<UserClass[]>();

  public user = new UserClass();
  public users: UserClass[] = [];

  public id: number = 0;

  // OPCIONES PARA IDENTIFICAR EL TIPO DE LOS DATOS QUE SERÁN TRAÍDOS
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  get$(): Observable<UserClass> {
    return this.user$.asObservable();
  }

  get(): Observable<any> {
    return this.http.get<UserClass>(this.apiUrl + '/' + this.id)
      .pipe(
        map((res: UserClass) => {
          if(res){
            this.user = new UserClass();
            this.user.setValues(res);
            this.user$.next(this.user);
          }
          console.log(res);
        }),
        catchError((err) => of(err))
      );
  }

  getAll$(): Observable<UserClass[]> {
    return this.users$.asObservable();
  }

  getAll(): Observable<any> {
    return this.http.get<UserClass[]>(this.apiUrl + this.id)
      .pipe(
        map((res: any) => {
          console.log(res);
          res.forEach((item: any) => {
            this.user = new UserClass()
            this.user.setValues(item)
            this.users.push(this.user)
          });
          this.users$.next(this.users)
        }),
        catchError((err) => of(err))
      );
  }

  createUser(user: UserClass): Observable<UserClass> {
    return this.http.post<UserClass>(this.apiUrl, user, this.httpOptions)
      .pipe(
        map((res: any) => {
          if (res) {
            this.user = new UserClass();
            this.user.setValues(res);
            this.user$.next(this.user);
          }
          console.log("Creado");
        }),
        catchError((err) => of(err))
      );
  }

}
