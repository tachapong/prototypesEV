import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvTransitionInfoPage } from './ev-transition-info.page';

const routes: Routes = [
  {
    path: '',
    component: EvTransitionInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvTransitionInfoPageRoutingModule {}
