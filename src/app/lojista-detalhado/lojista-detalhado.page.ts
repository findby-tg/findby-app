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
  //image:string = "https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg";
  image:string = "data:image/jpeg;base64,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";
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
