import { Usuario } from "./usuario";

export interface Consumidor extends Usuario {
    produtosFav: Array<number>;
    categoriaFav: Array<number>;
    segmentoFav: Array<number>;

    /*favoritarProduto(codProduto: number);
    favoritarCategoria(codCat: number);
    favoritarSegmento(codSeg: number);
    isFavorito(num: number): boolean;
    obterFavoritos(): Array<{cod: number, nome: string; tipo: string}>*/
}