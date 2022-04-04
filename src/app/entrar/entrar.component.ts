import { Component, OnInit } from '@angular/core';
import { userLogin } from '../model/userLogin';
import { AuthService } from '../service/auth.service'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: userLogin = new userLogin()


  constructor(

    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {     window.scroll(0,0);
  }
  
  
  entrar(){

    this.authService.entrar(this.userLogin).subscribe((resp: userLogin) => {

      this.userLogin = resp;

      environment.token = this.userLogin.token;
      environment.nome = this.userLogin.nome;
      environment.foto = this.userLogin.foto;
      environment.id = this.userLogin.id;


      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id)

      

      this.router.navigate(['/feed']);

    }, error =>{

      if(error.status == 401 || error == 500){
        alert("Usuário ou senha estão incorretos! Por favor, tente novamente.")
      }
    })
  }
}
