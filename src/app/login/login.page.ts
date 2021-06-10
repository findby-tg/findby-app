import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from '../interface/usuario';
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
              private userService: UsuariosService, 
              private storage: Storage,
              private toastController: ToastController) {}

  async presentToast(msg:string, time:number = 2000) {
    const toast = await this.toastController.create({
      message: msg,
      duration: time,
      position: "bottom"
    })
    toast.present();
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
      this.presentToast("Usuário/senha não encontrados!")
    })
  }

  executaRegistro() {
    if(this.email && this.usuario && this.senha) {
      var bodyUser:Usuario = {
        codSegmento: 8,
        nome: this.usuario,
        email: this.email,
        login: this.usuario,
        tipoUsuario: "C",
        tipoPessoa: "F",
        raio: 10,
        senha: this.senha,
        indUserAtivo: "S"
      }
      this.userService.cadastraUsuario(bodyUser).toPromise().then(data => {
        if(data.status == 201) {
          this.presentToast("Cadastro concluido com sucesso!")
          this.retornaLogin()
          this.habilitaLogin()
        } else {
          this.presentToast("Falhou")
        }
      })
    } else {
      this.presentToast("Preencha todos os campos para concluirmos o cadastro!");
    }
  }

  ionViewDidEnter() {
    this.limpaCampos()
  }

  ngOnInit() {}

}
