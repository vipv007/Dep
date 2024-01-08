import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeafspotPageRoutingModule } from './leafspot-routing.module';

import { LeafspotPage } from './leafspot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafspotPageRoutingModule
  ],
  declarations: [LeafspotPage]
})
export class LeafspotPageModule {}
