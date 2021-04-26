import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import _ from 'loadsh';

@Component({
  selector: 'app-modal-pesquisa',
  templateUrl: './modal-pesquisa.page.html',
  styleUrls: ['./modal-pesquisa.page.scss'],
})
export class ModalPesquisaPage implements OnInit {

  textoPesq: string;
  vendedores: Array<{id:number, nome: string}>;
  allVendors: any;

  constructor(private modalCtrl: ModalController, private router: Router) {
    this.textoPesq = '';
    this.vendedores = [
      { id: 1, nome: "Mercearia Warus"},
      { id: 2, nome: "Casa de Construção Irmão a Obra"},
      { id: 3, nome: "Padaria Pãodemais"},
      { id: 4, nome: "Açougue Filémio"},
      { id: 5, nome: "Bar Trópico Maisnocais"},
      { id: 6, nome: "Restaurante Florinda Dona"},
      { id: 7, nome: "Farmácia Guarda-chuva"},
      { id: 8, nome: "Papelaria Foldpaper"}
    ];

    this.allVendors = this.vendedores;
  }
 
  dismissModal() {
      this.modalCtrl.dismiss();
  }

  filtraPesq(vend: any) {
    let texto = vend.target.value;
    
    if(texto) {
      this.vendedores = _.values(this.allVendors);
      this.vendedores = this.vendedores.filter((vendedor) => {
        return (vendedor.nome.toLowerCase().indexOf(texto.toLowerCase()) > -1);
      })  
    } else {
      this.vendedores = this.allVendors;
    }
  }

  abreVitrine(vend: any) {
    //console.log(`tabs/vitrine/${vend.id}`)
    this.modalCtrl.dismiss();
    this.router.navigate(['tabs/vitrine', vend.id, vend.nome])
  }

  ngOnInit() {
  }

}
