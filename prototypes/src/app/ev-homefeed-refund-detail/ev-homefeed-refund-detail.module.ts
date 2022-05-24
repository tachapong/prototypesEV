import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvHomefeedRefundDetailPageRoutingModule } from './ev-homefeed-refund-detail-routing.module';

import { EvHomefeedRefundDetailPage } from './ev-homefeed-refund-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvHomefeedRefundDetailPageRoutingModule
  ],
  declarations: [EvHomefeedRefundDetailPage]
})
export class EvHomefeedRefundDetailPageModule {}
