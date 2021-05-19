import { Injectable } from '@angular/core';
import { Produto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[];

  constructor() {
    this.produtos = [
      {
        id: 1,
        produtos: [
                    {id:1,descricao:"Melancia", favorito: false},
                    {id:2,descricao:"Banana", favorito: false},
                    {id:3,descricao:"Peixe", favorito: false},
                    {id:4,descricao:"Sorvete", favorito: true}
                  ]
      },
      {
        id: 2,
        produtos: [
                    {id:5,descricao:"Cimento 50kg", favorito: false},
                    {id:6,descricao:"Tomada 3P Padrão Brasileiro", favorito: true},
                    {id:7,descricao:"Disjuntor 32A Uni", favorito: false},
                    {id:8,descricao:"Chave Fenda", favorito: false},
                    {id:9,descricao:"Lâmpada de LED 8W", favorito: true},
                    {id:10,descricao:"Chave Phillips", favorito: false},
                    {id:11,descricao:"Areia Média Lavada 20kg", favorito: false}
                  ]
      },
      {
        id: 3,
        produtos: [
                    {id:12,descricao:"Pão Frances", favorito: true},
                    {id:13,descricao:"Presunto Defumado", favorito: false},
                    {id:14,descricao:"Mussarela", favorito: false},
                    {id:15,descricao:"Pão de Leite", favorito: false},
                    {id:16,descricao:"Salame", favorito: false},
                    {id:17,descricao:"Mortadela", favorito: false},
                    {id:18,descricao:"Café Expresso", favorito: false},
                    {id:19,descricao:"Suco Natural", favorito: false},
                    {id:20,descricao:"Refrigerante", favorito: true},
                    {id:21,descricao:"Pão Italiano", favorito: false}
                  ]
      },
      {
        id: 4,
        produtos: [
                    {id:22,descricao:"Bife de Contra Filé", favorito: true},
                    {id:23,descricao:"Cubos de Costela", favorito: true},
                    {id:24,descricao:"Filezinho Sassami", favorito: false},
                    {id:25,descricao:"Linguiça de Pernil", favorito: true},
                    {id:26,descricao:"Costelinha Suína Premium", favorito: false},
                    {id:27,descricao:"Filé de Tilápia", favorito: false},
                    {id:28,descricao:"T-Bone Cordeiro", favorito: true}
                  ]
      },
      {
        id: 5,
        produtos: [
                    
                  ]
      },
      {
        id: 6,
        produtos: [
                    
                  ]
      },
      {
        id: 7,
        produtos: [
                    
                  ]
      },
      {
        id: 8,
        produtos: [
                    
                  ]
      },
    ]
  }
}
