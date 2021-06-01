import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { VendedoresService } from '../services/vendedores.service'

import _ from 'loadsh';
import { Vendedor } from '../interface/vendedor';

@Component({
  selector: 'app-modal-pesquisa',
  templateUrl: './modal-pesquisa.page.html',
  styleUrls: ['./modal-pesquisa.page.scss'],
})
export class ModalPesquisaPage implements OnInit {

  textoPesq: string;
  vendedores: Vendedor[];
  vendedoresPesq: Vendedor[];
  image:string = 'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg';
  load:any;

  constructor(private modalCtrl: ModalController, 
              private router: Router,
              private vendService: VendedoresService,
              private loading: LoadingController) {
    
    this.presentLoad()
    this.textoPesq = '';
    
    Promise.all([
      this.vendService.getLojistas().toPromise()
    ]).then((data) => {
      this.vendedores = data[0];
      this.load.dismiss()
    })
  }

  async presentLoad() {
    
    this.load = await this.loading.create({
      message: 'Carregando Aguarde...',
      spinner: 'crescent'
    });
    await this.load.present();
  }
 
  dismissModal() {
      this.modalCtrl.dismiss();
  }

  filtraPesq(vend: any) {
    let texto = vend.target.value;
    
    if(texto) {
      this.vendedoresPesq = _.values(this.vendedores);
      this.vendedoresPesq = this.vendedores.filter((vendedor) => {
        return (vendedor.nome.toLowerCase().indexOf(texto.toLowerCase()) > -1);
      })  
    } else {
      this.vendedoresPesq = []
    }
  }

  abreVitrine(vend: any) {
    this.modalCtrl.dismiss();
    this.router.navigate(['tabs/vitrine', vend.codUsuario])
  }

  ngOnInit() {
  }

}
