import { asNativeElements, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  isUsaLoc:boolean=false;
  distancia:number;
  image:string = 'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg';
  editaNome:boolean = true;
  editaEmail:boolean = true;
  editaCelular:boolean = true;

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

  constructor(private router: Router) {

  }
}
