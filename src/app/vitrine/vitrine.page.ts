import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Produto } from '../interface/produto';
import { ProdutosService } from '../services/produtos.service';
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
        vendedor: JSON.stringify(this.vendService.vendedores.find(a => a.id == this.id))
      }
    } 
    this.router.navigate(['tabs/lojista'], navigationExtra)
  }

  constructor(private route: ActivatedRoute, private loading: LoadingController, private prodService: ProdutosService, private vendService: VendedoresService, private router: Router) { 

    this.presentLoad();
    //this.prodVendedor = this.prodService.produtos;
    
    this.route.params.subscribe(params => {
      this.id = params['id'];

      console.log(this.id)
      this.nome = this.vendService.vendedores.find(a => a.id == this.id).nome;

      Promise.all([
        this.prodService.getProdutosVend(this.id).toPromise()
      ]).then((data) => {
        this.produtos = data[0]
        this.load.dismiss();
      })
    })
  }

  ngOnInit() {}
}
