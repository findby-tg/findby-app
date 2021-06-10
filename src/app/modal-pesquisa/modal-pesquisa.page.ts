import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { VendedoresService } from '../services/vendedores.service'

import _ from 'loadsh';
import { Vendedor } from '../interface/vendedor';
import { SegmentosService } from '../services/segmentos.service';
import { Segmento } from '../interface/segmento';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../interface/produto';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../interface/categoria';

@Component({
  selector: 'app-modal-pesquisa',
  templateUrl: './modal-pesquisa.page.html',
  styleUrls: ['./modal-pesquisa.page.scss'],
})
export class ModalPesquisaPage implements OnInit {

  textoPesq: string;
  vendedores: Vendedor[];
  vendedoresPesq: Vendedor[];
  segmentos: Segmento[] = [];
  produtos: Produto[]
  categorias: Categoria[];
  image:string = 'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg';
  load:any;

  constructor(private modalCtrl: ModalController, 
              private router: Router,
              private vendService: VendedoresService,
              private loading: LoadingController,
              private segService: SegmentosService,
              private prodService: ProdutosService,
              private catService: CategoriasService) {
    
    this.presentLoad()
    this.textoPesq = '';
    
    Promise.all([
      this.vendService.getLojistas().toPromise(),
      this.segService.getSegmentos().toPromise(),
      this.prodService.getProdutos().toPromise(),
      this.catService.getCategorias().toPromise()
    ]).then((data) => {
      this.vendedores = data[0];
      this.segmentos = data[1];
      this.produtos = data[2];
      this.categorias = data[3];
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
      var catSelec = this.categorias.filter((categoria) => {
        return categoria.nomeCategoria.toLowerCase().indexOf(texto.toLowerCase()) > -1
      }).map(cat => cat.codSegmento)

      var segsSelec = this.segmentos.filter((segmento) => {
        return segmento.nomeSegmento.toLowerCase().indexOf(texto.toLowerCase()) > -1 ||
               catSelec.find(ct => ct == segmento.codSegmento)
      })

      var prodsSelec = this.produtos.filter((produto) => {
        return produto.nomeProduto.toLowerCase().indexOf(texto.toLowerCase()) > -1
      }).map(prd => prd.codUsuario)

      this.vendedoresPesq = _.values(this.vendedores);
      this.vendedoresPesq = this.vendedores.filter((vendedor) => {
        return vendedor.nome.toLowerCase().indexOf(texto.toLowerCase()) > -1 ||
               segsSelec.find(s => s.codSegmento == vendedor.codSegmento) ||
               prodsSelec.find(p => p == vendedor.codUsuario);
      })
      

    } else {
      this.vendedoresPesq = []
    }
  }

  abreVitrine(vend: any) {
    this.modalCtrl.dismiss();
    this.router.navigate(['tabs/vitrine', vend.codUsuario])
  }

  buscaSegmento(codSegmento) {
    return this.segmentos.find(s => s.codSegmento == codSegmento).nomeSegmento
  }

  ngOnInit() {}

}
