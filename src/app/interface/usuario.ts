import { Contato } from "./contato";
import { Endereco } from "./endereco";

export interface Usuario {
    /** Código único do usuário */
    codUsuario:number;
    /** Nome do usuário */
    nome:string;
    /** E-mail do usuário formatado com @ */
    email:string;
    /** Login para a aplicação */
    login:string;
    /** Senha para a aplicação */
    senha:string;
    /** Nota de Ranking do usuário */
    nota:number;
    /** CPF ou CNPJ do usuário */
    cpfCgc:number;
    /** Tipo de pessoa do usuário [ F-Física , J-Jurídica ] */
    tipoPessoa:string;
    /** Inscrição Estadual do usuário */
    incricaoEstadual:number;
    /** Tipo de usuário [ C-Consumidor , V-Vendedor ] */
    tipoUsuario:string;
    /** Raio configurado para o usuário */
    raio:number;
    /** Contatos do usuário */
    contatos: Contato;
    /** Endereços do usuário */
    enderecos: Endereco;

    /*inserirUsuario(user: Usuario): number;
    obterUsuario(codUser: number): Usuario;
    atualizarUsuario(codUser: Usuario): number;*/
}