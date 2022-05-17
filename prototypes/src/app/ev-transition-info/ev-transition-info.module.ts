import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvTransitionInfoPageRoutingModule } from './ev-transition-info-routing.module';

import { EvTransitionInfoPage } from './ev-transition-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvTransitionInfoPageRoutingModule
  ],
  declarations: [EvTransitionInfoPage]
})
export class EvTransitionInfoPageModule {}
