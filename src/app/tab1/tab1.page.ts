import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Categoria } from '../interface/categoria';
import { Favorito } from '../interface/favoritos';
import { Produto } from '../interface/produto';
import { Segmento } from '../interface/segmento';
import { Vendedor } from '../interface/vendedor';
import { CategoriasService } from '../services/categorias.service';
import { FavoritosService } from '../services/favoritos.service';
import { ProdutosService } from '../services/produtos.service';
import { SegmentosService } from '../services/segmentos.service';
import { VendedoresService } from '../services/vendedores.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  itensFav:Array<{codItem:number, itemDesc:string, nome:string}> = [];
  favoritos: Favorito[];
  segmentos: Segmento[];
  categorias: Categoria[];
  vendedores: Vendedor[];
  produtos: Produto[];
  image:string = 'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg';
  load: any;

  async presentLoad() {
    
    this.load = await this.loading.create({
      message: 'Carregando Aguarde...',
      spinner: 'crescent'
    });
    await this.load.present();
  }

  exibeDados() {
    this.favoritos.forEach(b => 
      this.itensFav.push(
      {
        codItem: b.codItem,
        itemDesc: b.indTipoFav == "P" ? "Produto" : b.indTipoFav == "C" ? "Categoria" : b.indTipoFav == "S" ? "Segmento" : "Vendedor",
        nome: b.indTipoFav == "P" ?
                  this.produtos.find(p => p.codProduto == b.codItem).nomeProduto : 
                b.indTipoFav == "C" ?
                  this.categorias.find(c => c.codCategoria == b.codItem).nomeCategoria :
                  b.indTipoFav == "S" ?
                  this.segmentos.find(s => s.codSegmento == b.codItem).nomeSegmento :
                    /*b.indTipoFav == "V" ?
                      this.vendedores.find(v => v.id == b.codItem).nome : */""
      })
    )
    
  }

  constructor(private fav: FavoritosService,
              private prodServ: ProdutosService,
              private catServ: CategoriasService,
              private segServ: SegmentosService,
              private vendServ: VendedoresService,
              private favServ: FavoritosService,
              private loading: LoadingController) {

    this.presentLoad()
    Promise.all([
      this.segServ.getSegmentos().toPromise(),
      this.catServ.getCategorias().toPromise(),
      this.prodServ.getProdutos().toPromise(),
      this.favServ.getFavoritosUsuario(9).toPromise()
    ]).then((data) => {
      this.load.dismiss()
      this.segmentos = data[0]
      this.categorias = data[1]
      this.produtos = data[2]
      this.favoritos = data[3]
      this.exibeDados()
    })
    
  }

}
