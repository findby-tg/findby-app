import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Categoria } from '../interface/categoria';
import { Favorito } from '../interface/favoritos';
import { Produto } from '../interface/produto';
import { Segmento } from '../interface/segmento';
import { Usuario } from '../interface/usuario';
import { CategoriasService } from '../services/categorias.service';
import { FavoritosService } from '../services/favoritos.service';
import { ProdutosService } from '../services/produtos.service';
import { SegmentosService } from '../services/segmentos.service';
import { UsuariosService } from '../services/usuarios.service';
import { VendedoresService } from '../services/vendedores.service'

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.page.html',
  styleUrls: ['./vitrine.page.scss'],
})

export class VitrinePage implements OnInit {
  
  id: number;
  nome:string;
  produtos:Produto[];
  categorias:Categoria[];
  segmentos: Segmento[] = [];
  prodCategorizado:{} = {};
  vendedor:Usuario = {codUsuario:null,cpfCgc:null,email:null,indUsaLatLong:null,login:null,nome:null,numDddCelular:null,raio:null,senha:null,telefoneCelular:null,tipoPessoa:null,tipoUsuario:null,contatos:[],enderecos:[]};
  prodVendedor:Produto[] = [];
  load: any;
  isFavorito:boolean = true;
  image:string = "https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg";

  async presentLoad() {
    
    this.load = await this.loading.create({
      message: 'Carregando Aguarde...',
      spinner: 'crescent'
    });
    await this.load.present();
  }

  voltaVitrine() {
    this.navCtrl.back();
  }

  exibirProdutoDetalhado(id) {
    let navigationExtra: NavigationExtras = {
      queryParams: {
        produto: JSON.stringify(this.produtos.find(a => a.codProduto == id))
      }
    } 
    this.router.navigate(['tabs/produto'], navigationExtra)
  }

  exibirLojistaDetalhado() {
    let navigationExtra: NavigationExtras = {
      queryParams: {
        vendedor: JSON.stringify(this.vendedor)
      }
    } 
    this.router.navigate(['tabs/lojista'], navigationExtra)
  }

  buscarSegmento(codSegmento) {
    if(this.segmentos.length > 0)
      return this.segmentos.find(s => s.codSegmento == codSegmento).nomeSegmento
    else
      return ""
  }

  categorizaProdutos() {
    this.prodCategorizado = {}

    this.favService.getFavoritosUsuario(9).toPromise().then( fav =>    
      
      this.produtos.forEach((prod) => {
        if(!this.prodCategorizado.hasOwnProperty(prod.codCategoria)) {
          this.prodCategorizado[prod.codCategoria] = {
            nomeCategoria: this.categorias.find(cat => cat.codCategoria == prod.codCategoria ).nomeCategoria, 
            isFavorito: fav.find(f => f.codCategoria == prod.codCategoria) ? true : false,
            produtos: []
          };
        }
        this.prodCategorizado[prod.codCategoria].produtos.push(
          {
            codProduto: prod.codProduto,
            nomeProduto: prod.nomeProduto,
            descricao: prod.descricao,
            preco: prod.preco,
            marca: prod.marca
          }
        )
      })
    )
  }

  favoritarCategoria(codCategoria:number, adiciona:boolean) {
    this.catService.favoritarCategoria(9,codCategoria, adiciona).toPromise().then( a =>
      this.categorizaProdutos()
    )
  }

  constructor(private route: ActivatedRoute, private loading: LoadingController, private prodService: ProdutosService, private vendService: VendedoresService, private router: Router, private navCtrl: NavController, private usrService: UsuariosService, private catService: CategoriasService, private segService: SegmentosService, private favService: FavoritosService) { 

    this.presentLoad();
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      
      Promise.all([
        this.prodService.getProdutosVend(this.id).toPromise(),
        this.usrService.getUsuarioById(this.id).toPromise(),
        this.catService.getCategorias().toPromise(),
        this.segService.getSegmentos().toPromise()
      ]).then((data) => {
        this.produtos = data[0]
        this.vendedor = data[1]
        this.categorias = data[2]
        this.segmentos = data[3]

        this.categorizaProdutos();
        this.nome = this.vendedor.nome;
        this.load.dismiss();
      })
    })
  }

  ngOnInit() {}
}
