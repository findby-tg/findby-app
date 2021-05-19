import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Estado } from '../interface/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

  constructor(private http: HttpClient) { }

  getEstados(): Estado[] {
    var aEst: Estado[];

    this.http.get(this.url).subscribe(
      (obj:Estado[]) => aEst
    )

    return aEst;
  }

  getEstadoById(id:number): Estado {
    var est:Estado;
    
    this.http.get(this.url).subscribe(
      (obj:Estado) => est = {
        id: obj.id,
        nome: obj.nome
      }
    )

    return est
  }
}
