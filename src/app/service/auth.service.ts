import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from '../model/userLogin';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  private http: HttpClient) 
  {}
  
  
  entrar(userLogin: userLogin): Observable<userLogin> {
    return this.http.post<userLogin>('http://localhost:8080/usuario/login', userLogin)

  }


  

 
  Cadastrar(user: User): Observable<User> { //referencia model usuario

    return this.http.post<User>('http://localhost:8080/usuario/cadastrar', user);


}
}
