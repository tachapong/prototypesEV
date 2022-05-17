import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvConsentProductPage } from './ev-consent-product.page';

const routes: Routes = [
  {
    path: '',
    component: EvConsentProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvConsentProductPageRoutingModule {}
