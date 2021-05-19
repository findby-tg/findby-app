import { Injectable } from '@angular/core';
import { Favorito } from '../interface/favoritos';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritos:Favorito[]

  constructor() {
    this.favoritos = [
      {
        codUsuario: 9,
        favoritos: [
          {
            codItem: 1,
            indTipoItem: "V"
          },
          {
            codItem: 1,
            indTipoItem: "C"
          },
          {
            codItem: 1,
            indTipoItem: "S"
          },
          {
            codItem: 1,
            indTipoItem: "P"
          },
          {
            codItem: 2,
            indTipoItem: "P"
          },
          {
            codItem: 3,
            indTipoItem: "P"
          },
        ]
      }
    ]
  }
}
