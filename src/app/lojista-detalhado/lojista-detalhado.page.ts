import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Vendedor } from '../interface/vendedor';
import { VendedoresService } from '../services/vendedores.service';

declare var H;
@Component({
  selector: 'app-lojista-detalhado',
  templateUrl: './lojista-detalhado.page.html',
  styleUrls: ['./lojista-detalhado.page.scss'],
})
export class LojistaDetalhadoPage implements OnInit {

  vend:Vendedor;
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

  constructor(private route: ActivatedRoute, private loading: LoadingController, private vendService: VendedoresService, private navCtrl: NavController) {
    this.presentLoad;
    this.route.queryParams.subscribe(params => {
      this.vend = JSON.parse(params['vendedor'])
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

      function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
        marker.setData(html);
        group.addObject(marker);
      }

      function addInfoBubble(map) {
        var group = new H.map.Group();
      
        map.addObject(group);
        
        addMarkerToGroup(group,
                           { lat: -23.4817086, lng: -47.464015 },
                           `<div>
                            <input type="hidden" id="idVend">
                            <ion-button class="ion-text-wrap" style="height: 70px" expand="block" color="dark" id="vendedorBtn">${this.vend.nome}</ion-button>
                           </div>
                           <div>{Segmento Aqui}</div>`
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
          center:{ lat: -23.4817086, lng: -47.464015 }
        }
      );
      window.addEventListener('resize', () => that.map.getViewPort().resize());

      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(that.map));

      var ui = H.ui.UI.createDefault(that.map, defaultLayers);

      addInfoBubble(that.map);
    }, 1000)
  }

}
