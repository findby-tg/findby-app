import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorito } from '../interface/favoritos';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritos:Favorito[]

  host:string = "http://findby-web-rest.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  getFavoritosUsuario(id) {
    return this.httpClient.get<Favorito[]>(this.host + `/favoritos/${id}`)
  }
}
