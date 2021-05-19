export interface Endereco {
    /** Código do Usuário proprietário do Endereço */
    codUsuario:number
    /** Array de endereços do usuário */
    enderecos: Array<{
        /** Código único do Endereço */
        codEndereco:number,
        /** Logradouro do endereço */
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
        pais:string,
        /** Latitude do endereço */
        latitude:number,
        /** Longitude do endereço */
        longitude:number,
        /** Raio configurado */
        raio:number
    }>

    /*inserirEndereco(end: Endereco): number;
    obterEndereco(codUser: number): Endereco[];
    atualizarEndereco(end: Endereco): number;*/
}