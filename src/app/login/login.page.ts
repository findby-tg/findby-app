import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLogin:boolean = false
  isRegister:boolean = false
  email:string = ""
  usuario:string = ""
  senha:string= ""

  constructor(private router: Router,
              private userService: UsuariosService) {
  }

  limpaCampos() {
    this.email = ""
    this.usuario = ""
    this.senha = ""
  }

  habilitaLogin() {
    this.isLogin = !this.isLogin;
    this.limpaCampos()
  }
  habilitaRegister() {
    this.isRegister = !this.isRegister;
    this.limpaCampos()
  }
  retornaLogin() {
    this.isLogin = false
    this.isRegister = false
  }

  executeLogin() {
    var existe = false
    var usrs = this.userService.users;
    usrs.forEach(a => {
      if(a.login == this.usuario && a.senha == this.senha) 
        existe = true;
    })
    if(existe)
      this.router.navigate(['tabs'])
    else
      alert("Usuário/senha não encontrados!")
  }

  ionViewDidEnter() {
    this.limpaCampos()
  }

  ngOnInit() {
  }

}
