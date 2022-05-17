import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvHomeComfirmConsentPageRoutingModule } from './ev-home-comfirm-consent-routing.module';

import { EvHomeComfirmConsentPage } from './ev-home-comfirm-consent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvHomeComfirmConsentPageRoutingModule
  ],
  declarations: [EvHomeComfirmConsentPage]
})
export class EvHomeComfirmConsentPageModule {}
