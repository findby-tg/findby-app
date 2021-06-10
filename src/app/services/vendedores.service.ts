import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendedor } from '../interface/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  vendedores: Vendedor[];
  host:string = "http://findby-web-rest.herokuapp.com";
  uriBase:string = "/usuarios"

  constructor(private httpClient: HttpClient) {}

  getLojistas() {
    return this.httpClient.get<Vendedor[]>(this.host + this.uriBase + "/tipo/V")
  }

  favoritarVendedor(codUsuario:number,codVendedor:number,adiciona:boolean) {
    
    if(adiciona) {
      var body = { codUsuario: codUsuario, codVendedor: codVendedor};
      return this.httpClient.post(this.host + this.uriBase + `/favorito`, body, {observe: 'response'})
    } else {
      return this.httpClient.delete(this.host + this.uriBase + `/favorito/${codUsuario}/${codVendedor}`, {observe: 'response'})
    }
  }
}
