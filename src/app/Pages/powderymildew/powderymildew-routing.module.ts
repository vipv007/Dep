import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowderymildewPage } from './powderymildew.page';

const routes: Routes = [
  {
    path: '',
    component: PowderymildewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowderymildewPageRoutingModule {}
