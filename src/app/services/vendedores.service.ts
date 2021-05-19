import { Injectable } from '@angular/core';
import { Vendedor } from '../interface/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  vendedores: Vendedor[];

  constructor() { 
    this.vendedores = [
      { id: 1, nome: "Mercearia Warus", coord:{ lat: -23.4817086, lng: -47.4640104 }},
      { id: 2, nome: "Casa de Construção Irmão a Obra", coord:{ lat: -23.483481, lng: -47.460483 }},
      { id: 3, nome: "Padaria Pãodemais", coord:{ lat: -23.480481, lng: -47.462334 }},
      { id: 4, nome: "Açougue Filémio", coord:{ lat: -23.479282, lng: -47.463214 }},
      { id: 5, nome: "Bar Trópico Maisnocais", coord:{ lat: -23.480701, lng: -47.461286 }},
      { id: 6, nome: "Restaurante Florinda Dona", coord:{ lat: -23.480927, lng: -47.465685 }},
      { id: 7, nome: "Farmácia Guarda-chuva", coord:{ lat: -23.480368, lng: -47.461229 }},
      { id: 8, nome: "Papelaria Foldpaper", coord:{ lat: -23.481734, lng: -47.460544 }}
    ];
  }

}
