import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SilkwormsPageRoutingModule } from './silkworms-routing.module';

import { SilkwormsPage } from './silkworms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SilkwormsPageRoutingModule
  ],
  declarations: [SilkwormsPage]
})
export class SilkwormsPageModule {}
