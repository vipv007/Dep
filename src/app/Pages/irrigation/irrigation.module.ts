import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrrigationPageRoutingModule } from './irrigation-routing.module';

import { IrrigationPage } from './irrigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrrigationPageRoutingModule
  ],
  declarations: [IrrigationPage]
})
export class IrrigationPageModule {}
