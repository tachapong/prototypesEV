import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GvTransitionInfoPageRoutingModule } from './gv-transition-info-routing.module';

import { GvTransitionInfoPage } from './gv-transition-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GvTransitionInfoPageRoutingModule
  ],
  declarations: [GvTransitionInfoPage]
})
export class GvTransitionInfoPageModule {}
