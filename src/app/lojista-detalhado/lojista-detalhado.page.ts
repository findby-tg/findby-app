import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Contato } from '../interface/contato';
import { Endereco } from '../interface/endereco';
import { Vendedor } from '../interface/vendedor';
import { ContatosService } from '../services/contatos.service';
import { EnderecoService } from '../services/endereco.service';

declare var H;
@Component({
  selector: 'app-lojista-detalhado',
  templateUrl: './lojista-detalhado.page.html',
  styleUrls: ['./lojista-detalhado.page.scss'],
})
export class LojistaDetalhadoPage implements OnInit {

  vend:Vendedor;
  contatos:Contato[];
  endereco:Endereco = { codEndereco: null, codUsuario: null, logradouro: "", numero: null, bairro: "", cep: null, cidade: null, uf: null, pais: null, latitude: null, longitude: null, raio: null, indEnderecoSelec: null };
  load: any;
  image:string = "https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg";
  map:any;
  platform:any;
  hereMapApiKey:string="MDEyV46RCZ67_RQAfkyHDaAuDdEaeE5YSwS3pQmKHXc";

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

  constructor(private route: ActivatedRoute, private loading: LoadingController, private navCtrl: NavController, private contService: ContatosService, private endService: EnderecoService) {
    this.presentLoad();
    this.route.queryParams.subscribe(params => {
      this.vend = JSON.parse(params['vendedor'])

      Promise.all([
        this.contService.getContatosVend(this.vend.codUsuario).toPromise(),
        this.endService.getEnderecos().toPromise()
      ]).then((data) => {
        this.contatos = data[0];
        this.endereco = data[1].find(e =>  e.codUsuario == this.vend.codUsuario );
        console.log(this.endereco)
        this.load.dismiss()
      })
    })
  }

  ngOnInit() {
   var that = this;
   
    setTimeout(() =>{

      function clearBubbles(bubbles) {
        for(let bubble of bubbles){
          ui.removeBubble(bubble)
        }
      }

      function addMarkerToGroup(group, coordinate) {
        var marker = new H.map.Marker(coordinate);
        group.addObject(marker);
      }

      function addInfoBubble(map) {
        var group = new H.map.Group();
      
        map.addObject(group);
        
        addMarkerToGroup(group,
                           { lat: that.vend.enderecos[0].latitude, lng: that.vend.enderecos[0].longitude }
                        )    
      }

      that.platform = new H.service.Platform({
        'apikey': that.hereMapApiKey
      });
      var defaultLayers = that.platform.createDefaultLayers();

      that.map = new H.Map(document.getElementById("mapcontainervend"),
        defaultLayers.vector.normal.map,
        {
          zoom:16,
          center:{ lat: that.vend.enderecos[0].latitude, lng: that.vend.enderecos[0].longitude }
        }
      );
      window.addEventListener('resize', () => that.map.getViewPort().resize());

      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(that.map));

      var ui = H.ui.UI.createDefault(that.map, defaultLayers);

      addInfoBubble(that.map);
    }, 1000)
  }

}
