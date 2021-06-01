import { Produto } from "./produto";
import { Segmento } from "./segmento";
import { Usuario } from "./usuario";

export interface Vendedor extends Usuario {
    segmento: Segmento;
    produtos: Produto[];
}