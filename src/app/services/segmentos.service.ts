import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Segmento } from '../interface/segmento';

@Injectable({
  providedIn: 'root'
})
export class SegmentosService {

  segmentos: Segmento[];

  host:string = "http://findby-web-rest.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  getSegmentos() {
    return this.httpClient.get<Segmento[]>(this.host + "/segmentos");
  }
}
