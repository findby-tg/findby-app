import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[];

  host:string = "http://findby-web-rest.herokuapp.com";
  uriBase:string = "/produtos"

  constructor(private httpClient: HttpClient) {}

  getProdutosVend(id) {
    return this.httpClient.get<Produto[]>(this.host + this.uriBase + `/${id}`);
  }

  getProdutos() {
    return this.httpClient.get<Produto[]>(this.host + this.uriBase);
  }

  favoritarProduto(codUsuario:number,codProduto:number,adiciona:boolean) {
    
    if(adiciona) {
      var body = { codUsuario: codUsuario, codProduto: codProduto};
      return this.httpClient.post(this.host + this.uriBase + `/favorito`, body, {observe: 'response'})
    } else {
      return this.httpClient.delete(this.host + this.uriBase + `/favorito/${codUsuario}/${codProduto}`, {observe: 'response'})
    }
  }
}
