import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarvestingPageRoutingModule } from './harvesting-routing.module';

import { HarvestingPage } from './harvesting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarvestingPageRoutingModule
  ],
  declarations: [HarvestingPage]
})
export class HarvestingPageModule {}
