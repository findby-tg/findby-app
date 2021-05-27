import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Produto } from '../interface/produto';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto-detalhado',
  templateUrl: './produto-detalhado.page.html',
  styleUrls: ['./produto-detalhado.page.scss'],
})
export class ProdutoDetalhadoPage implements OnInit {

  id: number;
  prod:Produto;
  prodVendedor:Produto[] = [];
  isFavorito:boolean = true;
  load: any;
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

  constructor(private route: ActivatedRoute, private loading: LoadingController, private prodService: ProdutosService, private navCtrl: NavController) {
    this.presentLoad;
    this.prodVendedor = this.prodService.produtos;

    this.route.queryParams.subscribe(params => {
      this.prod = JSON.parse(params['produto']);
    })
  }

  ngOnInit() {
  }

}
