import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvHomeComfirmConsentPage } from './ev-home-comfirm-consent.page';

const routes: Routes = [
  {
    path: '',
    component: EvHomeComfirmConsentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvHomeComfirmConsentPageRoutingModule {}
