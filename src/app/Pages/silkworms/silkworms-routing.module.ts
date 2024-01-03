import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SilkwormsPage } from './silkworms.page';

const routes: Routes = [
  {
    path: '',
    component: SilkwormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SilkwormsPageRoutingModule {}
