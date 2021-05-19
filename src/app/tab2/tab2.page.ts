import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Vendedor } from '../interface/vendedor';
import { ModalPesquisaPage } from '../modal-pesquisa/modal-pesquisa.page';
import { VendedoresService } from '../services/vendedores.service';

declare var H;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map:any;
  platform:any;
  hereMapApiKey:string="MDEyV46RCZ67_RQAfkyHDaAuDdEaeE5YSwS3pQmKHXc";
  vendedores: Vendedor[];
  
  constructor(public modalController: ModalController,
              private vendService: VendedoresService,
              private router: Router) {}

  async modalPesquisa() {
    const modal = await this.modalController.create(
      {
        component: ModalPesquisaPage
      }
    );

    await modal.present();
  }

  testeFunct() {
    alert("deu certo!!!!")
  }

  ngOnInit() {
    var that = this;
    setTimeout(() =>{

      this.vendedores = this.vendService.vendedores;

      function clearBubbles(bubbles) {
        for(let bubble of bubbles){
          ui.removeBubble(bubble)
        }
      }

      function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
        /*marker.addEventListener('tap', function(evt) {
          setTimeout(() => {
            console.log("Adicionou Listener: ", evt.target.data, document.getElementById("banana"))
              document.getElementById("banana").addEventListener('click', function(evt) {
              that.router.navigate(['tabs/vitrine', 1, "Mercearia Warus"])
            })
          }, 2000)
        })*/
        marker.setData(html);
        group.addObject(marker);
      }

      function addInfoBubble(map) {
        var group = new H.map.Group();
      
        map.addObject(group);
      
        group.addEventListener('tap', function (evt) {

          var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
            content: evt.target.getData()
          });
          clearBubbles(ui.getBubbles())
          ui.addBubble(bubble);

          document.getElementById("vendedorBtn").addEventListener('click', () => {
            var id = (<HTMLInputElement>document.getElementById("idVend"))
            that.router.navigate(['tabs/vitrine', id.value])
          })

        }, false);
        
        that.vendedores.forEach((vend) => {
          addMarkerToGroup(group,
                           { lat: vend.coord.lat, lng: vend.coord.lng },
                           `<div>
                            <input type="hidden" id="idVend" value="${vend.id}">
                            <ion-button class="ion-text-wrap" style="height: 70px" expand="block" color="dark" id="vendedorBtn">${vend.nome}</ion-button>
                           </div>
                           <div>{Segmento Aqui}</div>`
                           )
        })      
      }
      that.platform = new H.service.Platform({
        'apikey': that.hereMapApiKey
      });
      var defaultLayers = that.platform.createDefaultLayers();

      that.map = new H.Map(document.getElementById("mapcontainer"),
        defaultLayers.vector.normal.map,
        {
          zoom:16,
          center:{ lat: -23.4817086, lng: -47.4640104 }
        }
      );
      window.addEventListener('resize', () => that.map.getViewPort().resize());

      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(that.map));

      var ui = H.ui.UI.createDefault(that.map, defaultLayers);

      addInfoBubble(that.map);
    }, 1000)
  }
}
