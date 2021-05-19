import { Injectable } from '@angular/core';
import { Endereco } from '../interface/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  enderecos:Endereco[];

  constructor() {
    this.enderecos = [
      {
      codUsuario: 1,
      enderecos: [
        {
          codEndereco: 1,
          logradouro: "Rua do Teste 1",
          numero: 100,
          bairro: "Bairro do Teste 1",
          cep: 12345311,
          cidade: "Sorocaba",
          uf: "SP",
          pais: "BR",
          latitude: -23.4817086,
          longitude: -47.4640104,
          raio: 10
        }
      ]
      },
      {
      codUsuario: 2,
      enderecos: [
      {
        codEndereco: 2,
        logradouro: "Rua do Teste 2",
        numero: 200,
        bairro: "Bairro do Teste 2",
        cep: 12345321,
        cidade: "Sorocaba",
        uf: "SP",
        pais: "BR",
        latitude: -23.483481,
        longitude: -47.460483,
        raio: 10
      }],
      },
      {
      codUsuario: 3,
      enderecos: [
      {
        codEndereco: 3,
        logradouro: "Rua do Teste 3",
        numero: 300,
        bairro: "Bairro do Teste 3",
        cep: 12345331,
        cidade: "Sorocaba",
        uf: "SP",
        pais: "BR",
        latitude: -23.480481,
        longitude: -47.462334,
        raio: 10
      }],
      },
      {
      codUsuario: 4,
      enderecos: [
      {
        codEndereco: 4,
        logradouro: "Rua do Teste 4",
        numero: 400,
        bairro: "Bairro do Teste 4",
        cep: 12345341,
        cidade: "Sorocaba",
        uf: "SP",
        pais: "BR",
        latitude: -23.479282,
        longitude: -47.463214,
        raio: 10
      }],
      },
      {
      codUsuario: 5,
      enderecos: [
      {
        codEndereco: 5,
        logradouro: "Rua do Teste 5",
        numero: 500,
        bairro: "Bairro do Teste 5",
        cep: 12345351,
        cidade: "Sorocaba",
        uf: "SP",
        pais: "BR",
        latitude: -23.480701,
        longitude: -47.461286,
        raio: 10
      }],
      },
      {
      codUsuario: 6,
      enderecos: [
      {
        codEndereco: 6,
        logradouro: "Rua do Teste 6",
        numero: 600,
        bairro: "Bairro do Teste 6",
        cep: 12345361,
        cidade: "Sorocaba",
        uf: "SP",
        pais: "BR",
        latitude: -23.480927,
        longitude: -47.465685,
        raio: 10
      }],
      },
      {
      codUsuario: 7,
      enderecos: [
      {
        codEndereco: 7,
        logradouro: "Rua do Teste 7",
        numero: 700,
        bairro: "Bairro do Teste 7",
        cep: 12345371,
        cidade: "Sorocaba",
        uf: "SP",
        pais: "BR",
        latitude: -23.480368,
        longitude: -47.461229,
        raio: 10
      }],
      },
      {
      codUsuario: 8,
      enderecos: [
      {
        codEndereco: 8,
        logradouro: "Rua do Teste 8",
        numero: 800,
        bairro: "Bairro do Teste 8",
        cep: 12345381,
        cidade: "Sorocaba",
        uf: "SP",
        pais: "BR",
        latitude: -23.481734,
        longitude: -47.460544,
        raio: 10
      }],
      },
      {
      codUsuario: 9,
      enderecos: [
      {
        codEndereco: 9,
        logradouro: "Rua do Teste 9",
        numero: 900,
        bairro: "Bairro do Teste 9",
        cep: 12345391,
        cidade: "Sorocaba",
        uf: "SP",
        pais: "BR",
        latitude: 0,
        longitude: 0,
        raio: 10
      }]
      }
    ]
  }
}
