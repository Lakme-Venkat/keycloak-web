import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/auth/realms/hotfoot/login-actions/authenticate';
  url1 = 'http://127.0.0.1:8080/auth/realms/hotfoot/protocol/openid-connect/auth';
  url3='http://localhost:9094/hotfoot/login';

  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public token: string;
  constructor(public httpClient: HttpClient) {
    this.currentUser = this.currentUserSubject?.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
  login(user: User): Observable<any>{
    let httpHeader = new HttpHeaders({
      'client_id':'hotfoot-keycloak',
      'Access-Control-Allow-Origin': '*'
    });
  //  httpHeader.set('client_id','hotfoot-keycloak');
  //  httpHeader.set('Access-Control-Allow-Origin', '*');
  const payload = new HttpParams();
  payload.set('username', user.username);
  payload.set('password', user.password);
  payload.set('scope', 'openid');
  payload.set('client_id', 'hotfoot-web-client');
  payload.set('grant_type', 'password');

  let options = { 
          headers: new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded')
                    .append("X-Requested-With","XMLHttpRequest"),
          params: payload,
          redirect: 'follow'
  };
  console.log(options);
  //  return this.httpClient.post<any>(this.url1,{},options);
  return this.httpClient.post<any>(this.url3,user);

  }

  getEmployees(): Observable<any>{

    return this.httpClient.get<any>('http://localhost:9094/employees');
  }

  createEmployee(user:any): Observable<any>{
    return this.httpClient.post<any>('http://localhost:9094/add',user);
  }
}
