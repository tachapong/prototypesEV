import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvProductListPageRoutingModule } from './ev-product-list-routing.module';

import { EvProductListPage } from './ev-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvProductListPageRoutingModule
  ],
  declarations: [EvProductListPage]
})
export class EvProductListPageModule {}
