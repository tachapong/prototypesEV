import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvHomePayPage } from './ev-home-pay.page';

const routes: Routes = [
  {
    path: '',
    component: EvHomePayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvHomePayPageRoutingModule {}
