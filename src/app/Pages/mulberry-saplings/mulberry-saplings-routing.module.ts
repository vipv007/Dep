import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulberrySaplingsPage } from './mulberry-saplings.page';

const routes: Routes = [
  {
    path: '',
    component: MulberrySaplingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulberrySaplingsPageRoutingModule {}
