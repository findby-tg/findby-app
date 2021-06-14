import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '../interface/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

  constructor(private http: HttpClient) { }

  getMunicipioByUf(uf:number) {
    return this.http.get<Cidade[]>(this.url + `/${uf}/municipios?orderBy=nome`)
  }
}
