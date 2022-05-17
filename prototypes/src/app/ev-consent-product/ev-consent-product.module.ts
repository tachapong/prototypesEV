import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvConsentProductPageRoutingModule } from './ev-consent-product-routing.module';

import { EvConsentProductPage } from './ev-consent-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvConsentProductPageRoutingModule
  ],
  declarations: [EvConsentProductPage]
})
export class EvConsentProductPageModule {}
