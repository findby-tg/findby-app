import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../interface/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  enderecos:Endereco[];

  host:string = "http://findby-web-rest.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  getEnderecos() {
    return this.httpClient.get<Endereco[]>(this.host + `/enderecos`)
  }

  getEnderecoLojistaById(id) {
    return this.httpClient.get<Endereco[]>(this.host + `/enderecos/${id}`)
  }
}
