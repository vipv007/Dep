import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MulberrySaplingsPageRoutingModule } from './mulberry-saplings-routing.module';

import { MulberrySaplingsPage } from './mulberry-saplings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MulberrySaplingsPageRoutingModule
  ],
  declarations: [MulberrySaplingsPage]
})
export class MulberrySaplingsPageModule {}
