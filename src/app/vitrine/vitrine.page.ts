import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  produtos:Produto ={id: 0,produtos: []} ;
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

  constructor(private route: ActivatedRoute, private loading: LoadingController, private prodService: ProdutosService, private vendService: VendedoresService) { 

    this.presentLoad();
    this.prodVendedor = this.prodService.produtos;
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    
    setTimeout(() =>{
      this.nome = this.vendService.vendedores.find(a => a.id == this.id).nome;
      this.produtos = this.prodVendedor.find(a => a.id == this.id);
      this.load.dismiss();
    }, 1000)
    
  }

  ngOnInit() {
  }
}
