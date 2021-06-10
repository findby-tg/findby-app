import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { ContatosService } from './contatos.service';
import { EnderecoService } from './endereco.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  users:Usuario[];
  host:string = "http://findby-web-rest.herokuapp.com";

  constructor(private contServ: ContatosService,
              private enderServ: EnderecoService,
              private httpClient: HttpClient) {
    /*this.users = [
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
        enderecos: {"codEndereco":1,"codUsuario":1,"logradouro":"R. Domingos Rafael Pinoti","numero":98,"bairro":"Vila Netinho","cep":18080590,"cidade":"Sorocaba","uf":"SP","pais":76,"latitude":-23.4817086,"longitude":-47.4640104,"raio":null},
        contatos: [{"codContato":1,"numDdd":15,"numContato":32242511,"indTipoContato":"F"},{"codContato":2,"numDdd":15,"numContato":32242512,"indTipoContato":"F"}]
      }
    ]*/
  }

  validarLogin(user, senha) {
    var body = {usuario: user, senha: senha}
    return this.httpClient.post<{valido:boolean, tipoUsuario:string, idUsuario:string}>(this.host + "/usuarios/login", body);
  }

  getUsuarioById(id) {
    return this.httpClient.get<Usuario>(this.host + `/usuarios/${id}`);
  }

  cadastraUsuario(usr:Usuario) {
    return this.httpClient.post(this.host + "/usuarios", usr, {observe: 'response'});
  }
}
