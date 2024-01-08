import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MulberryseedlingPageRoutingModule } from './mulberryseedling-routing.module';

import { MulberryseedlingPage } from './mulberryseedling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MulberryseedlingPageRoutingModule
  ],
  declarations: [MulberryseedlingPage]
})
export class MulberryseedlingPageModule {}
