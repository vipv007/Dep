import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulberryseedlingPage } from './mulberryseedling.page';

const routes: Routes = [
  {
    path: '',
    component: MulberryseedlingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulberryseedlingPageRoutingModule {}
