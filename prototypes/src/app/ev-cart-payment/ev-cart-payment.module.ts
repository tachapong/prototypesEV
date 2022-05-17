import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvCartPaymentPageRoutingModule } from './ev-cart-payment-routing.module';

import { EvCartPaymentPage } from './ev-cart-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvCartPaymentPageRoutingModule
  ],
  declarations: [EvCartPaymentPage]
})
export class EvCartPaymentPageModule {}
