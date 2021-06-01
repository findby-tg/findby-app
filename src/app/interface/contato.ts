/**
 * Interface de Contato
 * @interface Contato
 */
export interface Contato {

    /** Códido único do Contato */
    codContato:number,
    /** Número de DDD do Contato */
    numDdd:number,
    /** Número de Telefone do Contato */
    numContato:number,
    /**  Tipo do Contato [ 0-Fixo, 1-Celular ] */
    indTipoContato:string
    /*inserirContato(cont: Contato): number;
    obterContato(codUser: number): Contato[];
    atualizarContato(cont: Contato): number;*/
}