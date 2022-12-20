import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

import { AdminClass } from '../classes/admin.class';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = environment.api + 'admin';

  // MÉTODO CON CLASS - transmitir
  public admin$ = new Subject<AdminClass>();

  // recibir
  public admin = new AdminClass();
  
  constructor(
    private http: HttpClient
  ) { }

  get$(): Observable<AdminClass> {
    return this.admin$.asObservable();
  }

  get(id: string | null): Observable<any> {
    return this.http.get<AdminClass>(this.apiUrl + '/' + id)
      .pipe(
        map((res: any) => {
          console.log(res);
          if (res) {
            this.admin = new AdminClass();
            this.admin.setValues(res);
            this.admin$.next(this.admin);
          }
        }),
        catchError((err) => of(err))
      );
  }

}
