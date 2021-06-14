import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEnderecoPageRoutingModule } from './modal-endereco-routing.module';

import { ModalEnderecoPage } from './modal-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEnderecoPageRoutingModule
  ],
  declarations: [ModalEnderecoPage]
})
export class ModalEnderecoPageModule {}
