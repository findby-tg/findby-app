import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoDetalhadoPageRoutingModule } from './produto-detalhado-routing.module';

import { ProdutoDetalhadoPage } from './produto-detalhado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoDetalhadoPageRoutingModule
  ],
  declarations: [ProdutoDetalhadoPage]
})
export class ProdutoDetalhadoPageModule {}
