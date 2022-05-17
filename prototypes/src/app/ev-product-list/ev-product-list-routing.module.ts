import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvProductListPage } from './ev-product-list.page';

const routes: Routes = [
  {
    path: '',
    component: EvProductListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvProductListPageRoutingModule {}
