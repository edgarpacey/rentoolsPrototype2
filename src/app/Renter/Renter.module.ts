import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenterPageRoutingModule } from './Renter-routing.module';

import { RenterPage } from './Renter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenterPageRoutingModule
  ],
  declarations: [RenterPage]
})
export class RenterPageModule {}
