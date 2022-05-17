import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvHomeRefundPageRoutingModule } from './ev-home-refund-routing.module';

import { EvHomeRefundPage } from './ev-home-refund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvHomeRefundPageRoutingModule
  ],
  declarations: [EvHomeRefundPage]
})
export class EvHomeRefundPageModule {}
