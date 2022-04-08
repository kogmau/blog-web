import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = new Usuario;




  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }



  alterarUsuario() {


    this.authService.alterarPerfil(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      alert('Perfil alterado com sucesso!');
    });
  }
} 

