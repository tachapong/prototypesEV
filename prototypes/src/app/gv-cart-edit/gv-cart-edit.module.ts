import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GvCartEditPageRoutingModule } from './gv-cart-edit-routing.module';

import { GvCartEditPage } from './gv-cart-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GvCartEditPageRoutingModule
  ],
  declarations: [GvCartEditPage]
})
export class GvCartEditPageModule {}
