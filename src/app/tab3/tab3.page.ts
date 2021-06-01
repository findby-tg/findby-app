import { asNativeElements, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interface/usuario';
import { Storage } from '@ionic/storage-angular';
import { Endereco } from '../interface/endereco';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  isUsaLoc:boolean=false;
  distancia:number = 10;
  usuarioLogado:Usuario = {codUsuario: null,    nome: "",    email: "",    login: "",    cpfCgc: null,    numDddCelular: null,    telefoneCelular: null,    tipoUsuario: "",    tipoPessoa: "",    raio: null,    senha: "", indUsaLatLong: null,  enderecos: [], contatos: []};
  image:string = 'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg';
  editaNome:boolean = true;
  editaEmail:boolean = true;
  editaCelular:boolean = true;
  enderecos:Endereco[];

  executeLogoff() {
    this.router.navigate([''])
  }

  trocarNome() {
    this.editaNome = false;
    console.log(document.getElementById('nomeUser'))
    document.getElementById("nomeUser").getElementsByTagName('input')[0].select();
    
  }

  efetivaNome() {
    this.editaNome = true;
  }

  trocarEmail() {
    this.editaEmail = false;
    console.log(document.getElementById('emailUser'))
    document.getElementById("emailUser").getElementsByTagName('input')[0].select();
    
  }

  efetivaEmail() {
    this.editaEmail = true;
  }

  trocarCelular() {
    this.editaCelular = false;
    console.log(document.getElementById('celularUser'))
    document.getElementById("celularUser").getElementsByTagName('input')[0].select();
    
  }

  efetivaCelular() {
    this.editaCelular = true;
  }

  constructor(private router: Router, private storage: Storage, private endService: EnderecoService) {
    this.storage.get("usrLogado").then((data) => {
      this.usuarioLogado = data
      this.isUsaLoc = this.usuarioLogado.indUsaLatLong == "S"
      this.distancia = this.usuarioLogado.raio

      Promise.all([
        this.endService.getEnderecos()
      ])
    })
  }
}
