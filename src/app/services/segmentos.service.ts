import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Segmento } from '../interface/segmento';

@Injectable({
  providedIn: 'root'
})
export class SegmentosService {

  segmentos: Segmento[];

  host:string = "http://findby-web-rest.herokuapp.com";
  uriBase:string = "/segmentos"

  constructor(private httpClient: HttpClient) {}

  getSegmentos() {
    return this.httpClient.get<Segmento[]>(this.host + this.uriBase);
  }

  favoritarSegmento(codUsuario:number,codSegmento:number,adiciona:boolean) {
    
    if(adiciona) {
      var body = { codUsuario: codUsuario, codSegmento: codSegmento};
      return this.httpClient.post(this.host + this.uriBase + `/favorito`, body, {observe: 'response'})
    } else {
      return this.httpClient.delete(this.host + this.uriBase + `/favorito/${codUsuario}/${codSegmento}`, {observe: 'response'})
    }
  }
}
