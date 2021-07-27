import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoMapPageRoutingModule } from './GeoMap-routing.module';
import { GeoMapPage } from './GeoMap.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoMapPageRoutingModule,
    GeoMapFilterPageRoutingModule
  ],
  declarations: [GeoMapPage]
})
export class GeoMapPageModule {}
