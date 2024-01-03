import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoultPageRoutingModule } from './moult-routing.module';

import { MoultPage } from './moult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoultPageRoutingModule
  ],
  declarations: [MoultPage]
})
export class MoultPageModule {}
