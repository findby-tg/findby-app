import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { ContatosService } from './contatos.service';
import { EnderecoService } from './endereco.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  users:Usuario[];

  constructor(private contServ: ContatosService,
              private enderServ: EnderecoService) {
    this.users = [
      {
        codUsuario: 1,
        nome: "Mercearia Warus",
        login: "user1",
        senha: "pass1",
        cpfCgc: 12345678901,
        email: "email1@email.com.br",
        incricaoEstadual: 12345631,
        nota: 4,
        raio: 10,
        tipoPessoa: "J",
        tipoUsuario: "V",
        enderecos: enderServ.enderecos.find(ed => ed.codUsuario == 1),
        contatos: contServ.contatos.find(ct => ct.codUsuario == 1)
      }
    ]
  }
}
