import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvHomefeedRefundDetailPage } from './ev-homefeed-refund-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EvHomefeedRefundDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvHomefeedRefundDetailPageRoutingModule {}
