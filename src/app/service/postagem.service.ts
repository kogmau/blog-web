import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http:HttpClient
  ) { }


token={
  headers:new HttpHeaders().set('Authorization',environment.token)
}


getAllPostagem():Observable<Postagem[]>{
  return this.http.get<Postagem[]>('https://localhost:8080/postagem',this.token);
}



getByIdPostagem(id:number):Observable<Postagem>{
  return this.http.get<Postagem>(`https://localhost:8080/postagem/${id}`,this.token)
}


getByTituloPostagem(titulo:string):Observable<Postagem[]>{
  return this.http.get<Postagem[]>(`https://localhost:8080/postagem/${titulo}`,this.token)
}


criarPostagem(postagem:Postagem):Observable<Postagem>{
  return this.http.post<Postagem>('https://localhost:8080/postagem',postagem,this.token)
}



editarPostagem(postagem:Postagem):Observable<Postagem>{
  return this.http.put<Postagem>('https://localhost:8080/postagem',postagem,this.token);
}


deletePostagem(id: number){
  return this.http.delete(`https://localhost:8080/postagem/${id}`,this.token)
}

}
