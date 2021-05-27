import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoDetalhadoPage } from './produto-detalhado.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoDetalhadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoDetalhadoPageRoutingModule {}
