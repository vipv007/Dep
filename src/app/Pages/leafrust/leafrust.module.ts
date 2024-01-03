import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeafrustPageRoutingModule } from './leafrust-routing.module';

import { LeafrustPage } from './leafrust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafrustPageRoutingModule
  ],
  declarations: [LeafrustPage]
})
export class LeafrustPageModule {}
