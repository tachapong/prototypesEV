import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvCartEditPage } from './ev-cart-edit.page';

const routes: Routes = [
  {
    path: '',
    component: EvCartEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvCartEditPageRoutingModule {}
