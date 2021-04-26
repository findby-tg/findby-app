import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitrinePage } from './vitrine.page';

const routes: Routes = [
  {
    path: '',
    component: VitrinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitrinePageRoutingModule {}
