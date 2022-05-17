import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvCartEditPageRoutingModule } from './ev-cart-edit-routing.module';

import { EvCartEditPage } from './ev-cart-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvCartEditPageRoutingModule
  ],
  declarations: [EvCartEditPage]
})
export class EvCartEditPageModule {}
