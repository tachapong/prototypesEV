import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GvTransitionInfoPage } from './gv-transition-info.page';

const routes: Routes = [
  {
    path: '',
    component: GvTransitionInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GvTransitionInfoPageRoutingModule {}
