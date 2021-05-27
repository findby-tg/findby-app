import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojistaDetalhadoPage } from './lojista-detalhado.page';

const routes: Routes = [
  {
    path: '',
    component: LojistaDetalhadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojistaDetalhadoPageRoutingModule {}
