import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearByListingsPageRoutingModule } from './NearByListings-routing.module';

import { NearByListingsPage } from './NearByListings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearByListingsPageRoutingModule
  ],
  declarations: [NearByListingsPage]
})
export class NearByListingsPageModule {}
