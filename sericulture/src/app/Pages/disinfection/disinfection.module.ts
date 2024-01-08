import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisinfectionPageRoutingModule } from './disinfection-routing.module';

import { DisinfectionPage } from './disinfection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisinfectionPageRoutingModule
  ],
  declarations: [DisinfectionPage]
})
export class DisinfectionPageModule {}
