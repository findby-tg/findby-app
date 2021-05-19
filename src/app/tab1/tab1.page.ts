import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Favorito } from '../interface/favoritos';
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
  favorito: Favorito
  image:string = 'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg';
  load: any;

  async presentLoad() {
    
    this.load = await this.loading.create({
      message: 'Carregando Aguarde...',
      spinner: 'crescent'
    });
    await this.load.present();
  }

  constructor(private fav: FavoritosService,
              private prodServ: ProdutosService,
              private catServ: CategoriasService,
              private segServ: SegmentosService,
              private vendServ: VendedoresService,
              private loading: LoadingController) {

    this.presentLoad()
    this.favorito = fav.favoritos.find(a => a.codUsuario == 9)

    setTimeout(() => {
      this.favorito.favoritos.forEach(b => 
        this.itensFav.push(
        {
          codItem: b.codItem,
          itemDesc: b.indTipoItem == "P" ? "Produto" : b.indTipoItem == "C" ? "Categoria" : b.indTipoItem == "S" ? "Segmento" : "Vendedor",
          nome: /*b.indTipoItem == "P" ?  -- Falta criar lista só de itens
                    prodServ.produtos.find(p => p.id == b.codItem) : */
                  b.indTipoItem == "C" ?
                    catServ.categorias.find(c => c.codCategoria == b.codItem).nomeCategoria :
                    b.indTipoItem == "S" ?
                      segServ.segmentos.find(s => s.codSegmento == b.codItem).nomeSegmento :
                      b.indTipoItem == "V" ?
                        vendServ.vendedores.find(v => v.id == b.codItem).nome : ""
        })
      )
      this.load.dismiss();
    }, 2000)
  }

}
