import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GvCartPaymentPage } from './gv-cart-payment.page';

const routes: Routes = [
  {
    path: '',
    component: GvCartPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GvCartPaymentPageRoutingModule {}
