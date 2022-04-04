import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { userLogin } from '../model/userLogin';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  User: User = new User
  userLogin: userLogin = new userLogin
 
  confirmarSenha: string
  tipoUsuario: string;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmsenha(event: any){   //criando evento para receber as senhas
this.confirmarSenha = event.target.value //chamando o confirmar senha
  }

  cadastrar() {

    if (this.User.senha != this.confirmarSenha ) {
      alert("Suas senhas precisam ser iguais!");
    }
    else { //vai sobrecrever a senha em formato json para o backend receber
      this.authService.Cadastrar(this.User).subscribe((resp:User) => {
        this.User = resp
        this.router.navigate(['/login'])
        alert("Você foi cadastrado com sucesso! Bem vindo!")
      });

    }
  }


}
  
