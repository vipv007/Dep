import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PowderymildewPageRoutingModule } from './powderymildew-routing.module';

import { PowderymildewPage } from './powderymildew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PowderymildewPageRoutingModule
  ],
  declarations: [PowderymildewPage]
})
export class PowderymildewPageModule {}
