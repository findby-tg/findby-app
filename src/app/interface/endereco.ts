export interface Endereco {
    codEndereco:number,
    codUsuario:number,
    logradouro:string,
    /** Número do endereço */
    numero:number,
    /** Bairro do endereço */
    bairro:string,
    /** Cep do endereço */
    cep:number,
    /** Cidade do endereço */
    cidade:string,
    /** Uf do endereço em dois digitos Ex: "SP" */
    uf:string,
    /** País do endereço abreviado Ex: BRA */
    pais:number,
    /** Latitude do endereço */
    latitude:number,
    /** Longitude do endereço */
    longitude:number,
    /** Raio configurado */ 
    raio:number;
    indEnderecoSelec:string;

    /*inserirEndereco(end: Endereco): number;
    obterEndereco(codUser: number): Endereco[];
    atualizarEndereco(end: Endereco): number;*/
}