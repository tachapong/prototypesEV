import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomefeedDetailPage } from './homefeed-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomefeedDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomefeedDetailPageRoutingModule {}
