import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


export interface User {
  userid: string;
  fname: string;
  lname: string;
  mname: string;
  email: string;
  progid: number;
  access: string;
  is_login: string;
  created_at: Date;
  updated_at: Date;
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


export class UserService {
  Url: String = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get('http://localhost:3001/user');
  }
}
