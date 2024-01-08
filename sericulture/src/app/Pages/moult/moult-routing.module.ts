import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoultPage } from './moult.page';

const routes: Routes = [
  {
    path: '',
    component: MoultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoultPageRoutingModule {}
