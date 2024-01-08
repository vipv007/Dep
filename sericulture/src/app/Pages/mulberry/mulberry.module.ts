import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MulberryPageRoutingModule } from './mulberry-routing.module';

import { MulberryPage } from './mulberry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MulberryPageRoutingModule
  ],
  declarations: [MulberryPage]
})
export class MulberryPageModule {}
