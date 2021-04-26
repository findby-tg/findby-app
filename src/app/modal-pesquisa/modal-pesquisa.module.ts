import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPesquisaPageRoutingModule } from './modal-pesquisa-routing.module';

import { ModalPesquisaPage } from './modal-pesquisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPesquisaPageRoutingModule
  ],
  declarations: [ModalPesquisaPage]
})
export class ModalPesquisaPageModule {}
