import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEnderecoPage } from './modal-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEnderecoPageRoutingModule {}
