import { Injectable } from '@angular/core';
import { Segmento } from '../interface/segmento';

@Injectable({
  providedIn: 'root'
})
export class SegmentosService {

  segmentos: Segmento[];

  constructor() {
    this.segmentos = [
      {
        codSegmento: 1,
        descricaoSegmento: "TesteSegmento1",
        nomeSegmento: "Teste Segmento 1"
      },
      {
        codSegmento: 2,
        descricaoSegmento: "TesteSegmento2",
        nomeSegmento: "Teste Segmento 2"
      },
      {
        codSegmento: 3,
        descricaoSegmento: "TesteSegmento3",
        nomeSegmento: "Teste Segmento 3"
      },
      {
        codSegmento: 4,
        descricaoSegmento: "TesteSegmento4",
        nomeSegmento: "Teste Segmento 4"
      }
    ]
  }
}
