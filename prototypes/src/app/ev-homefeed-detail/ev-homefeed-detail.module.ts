import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvHomefeedDetailPageRoutingModule } from './ev-homefeed-detail-routing.module';

import { EvHomefeedDetailPage } from './ev-homefeed-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvHomefeedDetailPageRoutingModule
  ],
  declarations: [EvHomefeedDetailPage]
})
export class EvHomefeedDetailPageModule {}
