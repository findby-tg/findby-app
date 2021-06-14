import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Estado } from '../interface/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

  constructor(private http: HttpClient) { }

  getEstados() {
    return this.http.get<Estado[]>(this.url);
  }

  getEstadoById(id:number) {
    return this.http.get<Estado>(this.url + `/${id}`);
  }
}
