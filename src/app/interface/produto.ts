export interface Produto {
    id:number,
    produtos:Array<{
        id:number,
        descricao:string,
        favorito: boolean
    }>
}