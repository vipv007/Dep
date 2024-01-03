import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisinfectionPage } from './disinfection.page';

const routes: Routes = [
  {
    path: '',
    component: DisinfectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisinfectionPageRoutingModule {}
