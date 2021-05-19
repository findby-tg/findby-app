import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
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

  constructor(private modalCtrl: ModalController, 
              private router: Router,
              private vendService: VendedoresService) {
    this.textoPesq = '';
    this.vendedores = this.vendService.vendedores;
  }
 
  dismissModal() {
      this.modalCtrl.dismiss();
  }

  filtraPesq(vend: any) {
    let texto = vend.target.value;
    
    if(texto) {
      this.vendedores = _.values(this.vendService.vendedores);
      this.vendedores = this.vendedores.filter((vendedor) => {
        return (vendedor.nome.toLowerCase().indexOf(texto.toLowerCase()) > -1);
      })  
    } else {
      this.vendedores = this.vendService.vendedores;
    }
  }

  abreVitrine(vend: any) {
    this.modalCtrl.dismiss();
    this.router.navigate(['tabs/vitrine', vend.id])
  }

  ngOnInit() {
  }

}
