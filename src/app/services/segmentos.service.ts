import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Segmento } from '../interface/segmento';

@Injectable({
  providedIn: 'root'
})
export class SegmentosService {

  segmentos: Segmento[];

  host:string = "http://findby-web-rest.herokuapp.com";

  constructor(private httpClient: HttpClient) {
    
   /* [
      {
        codSegmento: 1,
        nomeSegmento: "Teste Segmento 1",
      },
      {
        codSegmento: 2,
        nomeSegmento: "Teste Segmento 2"
      },
      {
        codSegmento: 3,
        nomeSegmento: "Teste Segmento 3"
      },
      {
        codSegmento: 4,
        nomeSegmento: "Teste Segmento 4"
      }
    ]*/
  }

  getSegmentos() {
    return this.httpClient.get<Segmento[]>(this.host + "/segmentos");
  }
}
