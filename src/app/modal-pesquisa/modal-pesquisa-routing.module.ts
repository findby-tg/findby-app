import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPesquisaPage } from './modal-pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPesquisaPageRoutingModule {}
