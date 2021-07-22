import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoMapFilterPageRoutingModule } from './GeoMapFilter-routing.module';

import { GeoMapFilterPage } from './GeoMapFilter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoMapFilterPageRoutingModule
  ],
  declarations: [GeoMapFilterPage]
})
export class GeoMapFilterPageModule {}
