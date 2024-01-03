import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManuringPage } from './manuring.page';

const routes: Routes = [
  {
    path: '',
    component: ManuringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManuringPageRoutingModule {}
