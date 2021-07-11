import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickRenterPageRoutingModule } from './PickRenter-routing.module';

import { PickRenterPage } from './PickRenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickRenterPageRoutingModule
  ],
  declarations: [PickRenterPage]
})
export class PickRenterPageModule {}
