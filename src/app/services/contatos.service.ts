import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../interface/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  contatos: Contato[]

  host:string = "http://findby-web-rest.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  getContatosVend(id) {
    return this.httpClient.get<Contato[]>(this.host + `/contatos/${id}`)
  }
}
