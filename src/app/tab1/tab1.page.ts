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
  favorito: Favorito;
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
    this.itensFav = []
    this.favServ.getFavoritosUsuario(9).toPromise().then( fav =>
      fav.forEach(b => 
        this.itensFav.push(
          {
            codItem: b.codFavorito,
            itemDesc: b.codProduto ? "Produto" : b.codCategoria ? "Categoria" : b.codSegmento ? "Segmento" : b.codVendedor ? "Vendedor" : "Desconhecido",
            nome: b.codProduto   ? this.produtos.find(p => p.codProduto == b.codProduto).nomeProduto : 
                  b.codCategoria ? this.categorias.find(c => c.codCategoria == b.codCategoria).nomeCategoria :
                  b.codSegmento  ? this.segmentos.find(s => s.codSegmento == b.codSegmento).nomeSegmento :
                  b.codVendedor  ? this.vendedores.find(v => v.codUsuario == b.codVendedor).nome : 
                  ""
        })
      )
    ) 
  }

  removerFavorito(codFav:number) {
    this.favServ.getFavoritosUsuario(9).toPromise().then( (fav) => {
      
      this.favorito = fav.find(a => a.codFavorito == codFav)

      if(this.favorito.codCategoria)
        this.catServ.favoritarCategoria(this.favorito.codUsuario, this.favorito.codCategoria, false).toPromise().then(a => this.exibeDados())
      else if(this.favorito.codProduto)
        this.prodServ.favoritarProduto(this.favorito.codUsuario, this.favorito.codProduto, false).toPromise().then(a => this.exibeDados())
      else if(this.favorito.codSegmento)
        this.segServ.favoritarSegmento(this.favorito.codUsuario, this.favorito.codSegmento, false).toPromise().then(a => this.exibeDados())
      else if(this.favorito.codVendedor)
        this.vendServ.favoritarVendedor(this.favorito.codUsuario, this.favorito.codVendedor, false).toPromise().then(a => this.exibeDados())
    })
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
      this.vendServ.getLojistas().toPromise()
    ]).then((data) => {
      this.segmentos = data[0]
      this.categorias = data[1]
      this.produtos = data[2]
      this.vendedores = data[3]
      this.exibeDados()
      this.load.dismiss()
    })

  }
}
