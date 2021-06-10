import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  host:string = "http://findby-web-rest.herokuapp.com";
  uriBase:string = "/categorias"

  constructor(private httpClient: HttpClient) {}

  getCategorias() {
	  return this.httpClient.get<Categoria[]>(this.host + this.uriBase)
  }

  favoritarCategoria(codUsuario:number,codCategoria:number,adiciona:boolean) {
    
    if(adiciona) {
      var body = { codUsuario: codUsuario, codCategoria: codCategoria};
      return this.httpClient.post(this.host + this.uriBase + `/favorito`, body, {observe: 'response'})
    } else {
      return this.httpClient.delete(this.host + this.uriBase + `/favorito/${codUsuario}/${codCategoria}`, {observe: 'response'})
    }
  }
}
