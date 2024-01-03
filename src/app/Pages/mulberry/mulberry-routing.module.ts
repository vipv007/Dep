import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulberryPage } from './mulberry.page';

const routes: Routes = [
  {
    path: '',
    component: MulberryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulberryPageRoutingModule {}
