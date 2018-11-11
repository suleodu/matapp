import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export interface Session {
  sesid: number;
  sesname: string;
  passmack: boolean;
  status: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable({
  providedIn: 'root'
})


export class SessionService {

  Url: String = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAllSession(): Observable<Session[]> {
    return this.http.get<Session[]>(this.Url + '/session',
        ).pipe(map(res => res['payload']));
  }

  AddSession(data: Session) {
    return this.http.post<Session>(this.Url + '/session', data, httpOptions);
  }

  UpdateSession(data: Session, param: number) {
    return this.http.put<Session>(this.Url + '/session/' + param, data, httpOptions);
  }

  findLessons(
    sesId: number, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3):  Observable<Session[]> {

    return this.http.get(this.Url + '/session/', {
        params: new HttpParams()
            .set('sesId', sesId.toString())
            .set('filter', filter)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(
        map(res =>  res['payload'])
    );
  }
}
