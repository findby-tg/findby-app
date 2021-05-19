export interface Favorito {
    /** Código do usuário  */
    codUsuario:number
    /** Favoritos do usuário */
    favoritos: Array<
    {
        /** Código do Item favorito */
        codItem:number
        /** Indicação do tipo de Item favorito [ S-Segmento , C-Categoria , P-Produto , L-Lojista ] */
        indTipoItem:string
    }>
}