import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../interface/produto';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.page.html',
  styleUrls: ['./vitrine.page.scss'],
})

export class VitrinePage implements OnInit {
  
  id: number;
  nome:string;
  produtos:Produto[];
  prodVendedor:Array<{id:number, produtos:Produto[]}> = [];

  constructor(private route: ActivatedRoute) { 
    var prod = [];
    //{ id: 1, descricao: "Mercearia Warus"},
    prod = [
      {id:1,descricao:"Melancia"},
      {id:2,descricao:"Banana"},
      {id:3,descricao:"Peixe"},
      {id:4,descricao:"Sorvete"}
    ];
    //this.produtos = prod;
    this.prodVendedor.push(
      {
        id: 1,
        produtos: prod
      }
    );

    //{ id: 2, descricao: "Casa de Construção Irmão a Obra"},
    prod = [
      {id:1,descricao:"Cimento 50kg"},
      {id:2,descricao:"Tomada 3P Padrão Brasileiro"},
      {id:3,descricao:"Disjuntor 32A Uni"},
      {id:4,descricao:"Chave Fenda"},
      {id:5,descricao:"Lâmpada de LED 8W"},
      {id:6,descricao:"Chave Phillips"},
      {id:7,descricao:"Areia Média Lavada 20kg"},
    ];
    this.prodVendedor.push(
      {
        id: 2,
        produtos: prod
      }
    );

    //{ id: 3, descricao: "Padaria Pãodemais"},
    prod = [
      {id:1,descricao:"Pão Frances"},
      {id:2,descricao:"Presunto Defumado"},
      {id:3,descricao:"Mussarela"},
      {id:4,descricao:"Pão de Leite"},
      {id:5,descricao:"Salame"},
      {id:6,descricao:"Mortadela"},
      {id:7,descricao:"Café Expresso"},
      {id:8,descricao:"Suco Natural"},
      {id:9,descricao:"Refrigerante"},
      {id:10,descricao:"Pão Italiano"},
    ];
    this.prodVendedor.push(
      {
        id: 3,
        produtos: prod
      }
    );
      
    //{ id: 4, descricao: "Açougue Filémio"},
    prod = [
      {id:1,descricao:"Bife de Contra Filé"},
      {id:2,descricao:"Cubos de Costela"},
      {id:3,descricao:"Filezinho Sassami"},
      {id:4,descricao:"Linguiça de Pernil"},
      {id:5,descricao:"Costelinha Suína Premium"},
      {id:6,descricao:"Filé de Tilápia"},
      {id:7,descricao:"T-Bone Cordeiro"},
    ];
    this.prodVendedor.push(
      {
        id: 4,
        produtos: prod
      }
    );

    //{ id: 5, descricao: "Bar Trópico Maisnocais"},
    prod = [];
    this.prodVendedor.push(
      {
        id: 5,
        produtos: prod
      }
    );

    //{ id: 6, descricao: "Restaurante Florinda Dona"},
    prod = [];
    this.prodVendedor.push(
      {
        id: 6,
        produtos: prod
      }
    );

    //{ id: 7, descricao: "Farmácia Guarda-chuva"},
    prod = [];
    this.prodVendedor.push(
      {
        id: 7,
        produtos: prod
      }
    );
      
    //{ id: 8, descricao: "Papelaria Foldpaper"}
    prod = [];
    this.prodVendedor.push(
      {
        id: 8,
        produtos: prod
      }
    );
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.nome = params['nome'];
    })

    setTimeout(() =>{
      console.log(this.prodVendedor,this.id,this.nome)
      this.produtos = this.prodVendedor.find(a => a.id == this.id).produtos;
    }, 1000)
    
  }

  ngOnInit() {
  }
}
