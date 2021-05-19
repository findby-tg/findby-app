import { Injectable } from '@angular/core';
import { Contato } from '../interface/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  contatos: Contato[]

  constructor() {
    this.contatos = [
      {
        codUsuario: 1,
        contatos: [
          {
            codContato: 1,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242511
          },
          {
            codContato: 2,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242512
          }
        ]
      },
      {
        codUsuario: 2,
        contatos: [
          {
            codContato: 3,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242521
          }
        ]
      },
      {
        codUsuario: 3,
        contatos: [
          {
            codContato: 4,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242531
          }
        ]
      },
      {
        codUsuario: 4,
        contatos: [
          {
            codContato: 5,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242541
          }
        ]
      },
      {
        codUsuario: 5,
        contatos: [
          {
            codContato: 6,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242551
          }
        ]
      },
      {
        codUsuario: 6,
        contatos: [
          {
            codContato: 7,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242561
          },
          {
            codContato: 8,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242562
          }
        ]
      },
      {
        codUsuario: 7,
        contatos: [
          {
            codContato: 9,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242571
          }
        ]
      },
    {
        codUsuario: 8,
        contatos: [
          {
            codContato: 10,
            indTipoContato: 0,
            numDdd: 15,
            numTelefone: 32242581
          }
        ]
      },
    ]
  }
}
