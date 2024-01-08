import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrrigationPage } from './irrigation.page';

const routes: Routes = [
  {
    path: '',
    component: IrrigationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrrigationPageRoutingModule {}
