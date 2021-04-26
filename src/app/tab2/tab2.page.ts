import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPesquisaPage } from '../modal-pesquisa/modal-pesquisa.page';

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
  
  constructor(public modalController: ModalController) {}

  async modalPesquisa() {
    const modal = await this.modalController.create(
      {
        component: ModalPesquisaPage
      }
    );

    await modal.present();
  }

  ngOnInit() {
    var that = this;
    setTimeout(() =>{

      function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
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
          ui.addBubble(bubble);
        }, false);
      
        addMarkerToGroup(group, { lat: -23.4817086, lng: -47.4640104 },
          '<div><a href="https://www.facebook.com/maycondawn" target="_blank">Maycon\'s House</a>' +
          '</div><div>Here\'s Johnny<br>Capacity: Over 9 thousand!</div>');
      
        addMarkerToGroup(group, { lat: -23.483481, lng: -47.460483 },
          '<div><a href="https://www.facebook.com/rafael.maluffe.vieira" target="_blank">Rafael\'s House</a>' +
          '</div><div>Salad house what\'s the cucumber!<br>Capacity: More than 3 FUS-RO-DAH</div>');
      
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
