import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafspotPage } from './leafspot.page';

const routes: Routes = [
  {
    path: '',
    component: LeafspotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeafspotPageRoutingModule {}
