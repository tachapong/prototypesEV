import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvHomePayPageRoutingModule } from './ev-home-pay-routing.module';

import { EvHomePayPage } from './ev-home-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvHomePayPageRoutingModule
  ],
  declarations: [EvHomePayPage]
})
export class EvHomePayPageModule {}
