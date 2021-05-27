import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[];

  host:string = "http://findby-web-rest.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  getProdutosVend(id) {
    return this.httpClient.get<Produto[]>(this.host + `/produtos/${id}`);
  }

  getProdutos() {
    return this.httpClient.get<Produto[]>(this.host + `/produtos`);
  }
}
