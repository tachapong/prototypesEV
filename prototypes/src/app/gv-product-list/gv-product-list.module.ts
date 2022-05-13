import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GvProductListPageRoutingModule } from './gv-product-list-routing.module';

import { GvProductListPage } from './gv-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GvProductListPageRoutingModule
  ],
  declarations: [GvProductListPage]
})
export class GvProductListPageModule {}
