import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomefeedDetailPageRoutingModule } from './homefeed-detail-routing.module';

import { HomefeedDetailPage } from './homefeed-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomefeedDetailPageRoutingModule
  ],
  declarations: [HomefeedDetailPage]
})
export class HomefeedDetailPageModule {}
