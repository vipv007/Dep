import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManuringPageRoutingModule } from './manuring-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ManuringPage } from './manuring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManuringPageRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [ManuringPage]
})
export class ManuringPageModule {}
