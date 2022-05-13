import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GvCartPaymentPageRoutingModule } from './gv-cart-payment-routing.module';

import { GvCartPaymentPage } from './gv-cart-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GvCartPaymentPageRoutingModule
  ],
  declarations: [GvCartPaymentPage]
})
export class GvCartPaymentPageModule {}
