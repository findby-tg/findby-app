import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojistaDetalhadoPageRoutingModule } from './lojista-detalhado-routing.module';

import { LojistaDetalhadoPage } from './lojista-detalhado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LojistaDetalhadoPageRoutingModule
  ],
  declarations: [LojistaDetalhadoPage]
})
export class LojistaDetalhadoPageModule {}
