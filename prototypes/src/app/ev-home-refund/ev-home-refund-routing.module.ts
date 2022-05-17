import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvHomeRefundPage } from './ev-home-refund.page';

const routes: Routes = [
  {
    path: '',
    component: EvHomeRefundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvHomeRefundPageRoutingModule {}
