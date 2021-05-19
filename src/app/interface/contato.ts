/**
 * Interface de Contato
 * @interface Contato
 */
export interface Contato {
    /** Código do usuário proprietário do contato */
    codUsuario: number
    /** Array de contatos do usuário */
    contatos: Array<
        {
            /** Códido único do Contato */
            codContato:number,
            /** Número de DDD do Contato */
            numDdd:number,
            /** Número de Telefone do Contato */
            numTelefone:number,
            /**  Tipo do Contato [ 0-Fixo, 1-Celular ] */
            indTipoContato:number
        }
    >
    /*inserirContato(cont: Contato): number;
    obterContato(codUser: number): Contato[];
    atualizarContato(cont: Contato): number;*/
}