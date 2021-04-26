import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VitrinePageRoutingModule } from './vitrine-routing.module';

import { VitrinePage } from './vitrine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitrinePageRoutingModule
  ],
  declarations: [VitrinePage]
})
export class VitrinePageModule {}
