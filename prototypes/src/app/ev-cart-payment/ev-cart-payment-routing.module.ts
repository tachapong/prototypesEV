import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvCartPaymentPage } from './ev-cart-payment.page';

const routes: Routes = [
  {
    path: '',
    component: EvCartPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvCartPaymentPageRoutingModule {}
