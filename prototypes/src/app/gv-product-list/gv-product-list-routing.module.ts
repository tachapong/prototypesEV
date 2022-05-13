import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GvProductListPage } from './gv-product-list.page';

const routes: Routes = [
  {
    path: '',
    component: GvProductListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GvProductListPageRoutingModule {}
