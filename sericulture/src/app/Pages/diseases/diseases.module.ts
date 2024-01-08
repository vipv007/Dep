import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { DiseasesPageRoutingModule } from './diseases-routing.module';

import { DiseasesPage } from './diseases.page';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiseasesPageRoutingModule
  ],
  declarations: [DiseasesPage]
})
export class DiseasesPageModule {}
