import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
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
              private userService: UsuariosService, private storage: Storage) {
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
    Promise.all([
      this.userService.validarLogin(this.usuario, this.senha).toPromise()
    ]).then((data) => {

      if(data[0].valido) {
        Promise.all([
          this.userService.getUsuarioById(data[0].idUsuario).toPromise()
        ]).then((dados) => {
          this.storage.clear()
          console.log(dados[0])
          this.storage.set("usrLogado", dados[0])
        })
        this.router.navigate(['tabs'])
  
      } else
          alert("Usuário/senha não encontrados!")
    })
  }

  ionViewDidEnter() {
    this.limpaCampos()
  }

  ngOnInit() {
  }

}
