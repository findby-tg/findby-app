import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect, ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Endereco } from '../interface/endereco';
import { Segmento } from '../interface/segmento';
import { Vendedor } from '../interface/vendedor';
import { ModalPesquisaPage } from '../modal-pesquisa/modal-pesquisa.page';
import { EnderecoService } from '../services/endereco.service';
import { SegmentosService } from '../services/segmentos.service';
import { UsuariosService } from '../services/usuarios.service';
import { VendedoresService } from '../services/vendedores.service';

declare var H;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map:any;
  ui:any;
  platform:any;
  hereMapApiKey:string="MDEyV46RCZ67_RQAfkyHDaAuDdEaeE5YSwS3pQmKHXc";
  vendedores: Vendedor[];
  segmentos: Segmento[];
  enderecos:Endereco[] = [];
  endSelecionado:string = "";
  temEndereco:boolean = false;
  
  constructor(public modalController: ModalController, private vendService: VendedoresService, private endService: EnderecoService, private router: Router, private storage: Storage, private userService: UsuariosService, private segService: SegmentosService) {
    Promise.all([
      this.endService.getEnderecos().toPromise(),
      this.vendService.getLojistas().toPromise(),
      this.segService.getSegmentos().toPromise()
    ]).then((data) => {
      this.vendedores = data[1]
      this.segmentos = data[2]
      this.storage.get("usrLogado").then((dado) => {
        this.enderecos = dado.enderecos
        this.temEndereco = this.enderecos.length > 0
        if(this.temEndereco)
          this.endSelecionado = this.enderecos[0].logradouro

        this.carregaMapa()
      })
    })
  }

  async modalPesquisa() {
    const modal = await this.modalController.create(
      {
        component: ModalPesquisaPage
      }
    );

    await modal.present();
  }

  selecionaEnder(end:Endereco) {
    this.endSelecionado = end.logradouro
    this.map.setCenter({ lat: end.latitude, lng: end.longitude },true)
    this.refreshMapa(); 
  }

  refreshMapa() {
    this.map.removeObjects(this.map.getObjects());
    this.addInfoBubble(this.ui, this.map);
  }

  addMarkerToGroup(group, coordinate, html) {
    var icon = "/assets/basket.svg"
    var pngIcon = new H.map.Icon(icon, {size: {w: 45, h: 60}});
    var marker = new H.map.Marker(coordinate, {icon: pngIcon});
    marker.setData(html);
    group.addObject(marker);
  }

  addInfoBubble(ui, map) {
    var that = this;
    var group = new H.map.Group();
  
    map.addObject(group);
  
    group.addEventListener('tap', function (evt) {

      var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
        content: evt.target.getData()
      });
      that.clearBubbles(ui, ui.getBubbles())
      ui.addBubble(bubble);

      document.getElementById("vendedorBtn").addEventListener('click', () => {
        var id = (<HTMLInputElement>document.getElementById("idVend"))
        that.router.navigate(['tabs/vitrine', id.value])
      })

    }, false);
    
    this.vendedores.forEach((vend) => {
      
      var segm = this.segmentos.find(s => s.codSegmento == vend.codSegmento).nomeSegmento
      if(vend.enderecos.length)
        this.addMarkerToGroup(group,
                        { lat: vend.enderecos[0].latitude, lng: vend.enderecos[0].longitude },
                        `<div>
                          <input type="hidden" id="idVend" value="${vend.codUsuario}">
                          <ion-button class="ion-text-wrap" style="height: 70px; width:200px" expand="block" color="tertiary" id="vendedorBtn">${vend.nome}</ion-button>
                        </div>
                        <div>${segm}</div>`
                        )
    })      
  }

  clearBubbles(ui, bubbles) {
    for(let bubble of bubbles){
      ui.removeBubble(bubble)
    }
  }

  ngOnInit() {}
  
  carregaMapa() {
    var that = this;
    setTimeout(() =>{
  
      that.platform = new H.service.Platform({
        'apikey': that.hereMapApiKey
      });
      var defaultLayers = that.platform.createDefaultLayers();
  
      that.map = new H.Map(document.getElementById("mapcontainer"),
        defaultLayers.vector.normal.map,
        {
          zoom:16,
          center:{ lat: this.enderecos[0].latitude, lng: this.enderecos[0].longitude }
        }
      );
      window.addEventListener('resize', () => that.map.getViewPort().resize());
  
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(that.map));
  
      that.ui = H.ui.UI.createDefault(that.map, defaultLayers);
    }, 1000)

  }

  ionViewDidEnter() {
    if(this.map)
      this.refreshMapa()
    else
      setTimeout(() =>{
        this.ionViewDidEnter()
      }, 1000)
  }
}
