import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cidade } from '../interface/cidade';
import { Estado } from '../interface/estado';
import { CidadesService } from '../services/cidades.service';
import { EstadosService } from '../services/estados.service';

@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.page.html',
  styleUrls: ['./modal-endereco.page.scss'],
})
export class ModalEnderecoPage implements OnInit {

  @Input() modo:string;
  @Input() uf:number;
  @Input() municipio:number;
  @Input() cep:number;
  @Input() logradouro:string;
  @Input() numero:number;
  @Input() bairro:string;
  @Input() raio:number;
  @Input() latitude:number;
  @Input() longitude:number;
  distancia:number = 0;
  estados: Estado[]
  cidades: Cidade[]
  ufNome:string;
  cidadeNome:string;

  dismissModal() {
    this.modalController.dismiss();
  }

  carregaCidade() {
    //load
    this.cidService.getMunicipioByUf(this.uf).toPromise().then((cid) => {
      this.cidades = cid
    })
  }

  constructor(private modalController: ModalController, private estService: EstadosService, private cidService: CidadesService) { 
    Promise.all([
      this.estService.getEstados().toPromise(),
    ]).then((data) => {
      this.estados = data[0]
      if(this.uf) {
        this.cidService.getMunicipioByUf(this.uf).toPromise().then((cid) => {
          this.cidades = cid
          this.cidadeNome = this.cidades.find(c => c.id == this.municipio).nome
        })
        this.ufNome = data[0].find(e => e.id == this.uf).sigla
      }
    })
  }

  ngOnInit() {
  }

}
