import { Injectable } from '@angular/core';
import { Categoria } from '../interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: Categoria[];

  constructor() {
	  this.categorias = [
		  {
			  codCategoria: 1,
			  codSegmento: 1,
			  descricaoSegmento: "TesteCategoria1",
			  nomeCategoria: "Teste Categoria 1"
		  },
		  {
			  codCategoria: 2,
			  codSegmento: 1,
			  descricaoSegmento: "TesteCategoria2",
			  nomeCategoria: "Teste Categoria 2"
		  },
		  {
			  codCategoria: 3,
			  codSegmento: 1,
			  descricaoSegmento: "TesteCategoria3",
			  nomeCategoria: "Teste Categoria 3"
		  },
		  {
			  codCategoria: 4,
			  codSegmento: 2,
			  descricaoSegmento: "TesteCategoria4",
			  nomeCategoria: "Teste Categoria 4"
		  },
		  {
			  codCategoria: 5,
			  codSegmento: 3,
			  descricaoSegmento: "TesteCategoria5",
			  nomeCategoria: "Teste Categoria 5"
		  },
		  {
			  codCategoria: 6,
			  codSegmento: 4,
			  descricaoSegmento: "TesteCategoria6",
			  nomeCategoria: "Teste Categoria 6"
		  },
		  {
			  codCategoria: 7,
			  codSegmento: 4,
			  descricaoSegmento: "TesteCategoria7",
			  nomeCategoria: "Teste Categoria 7"
		  }
	  ]
  }
}
