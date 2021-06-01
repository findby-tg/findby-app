import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendedor } from '../interface/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  vendedores: Vendedor[];
  host:string = "http://findby-web-rest.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  getLojistas() {
    return this.httpClient.get<Vendedor[]>(this.host + "/usuarios/tipo/V")
  }
}
