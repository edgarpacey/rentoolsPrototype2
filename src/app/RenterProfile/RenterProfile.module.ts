import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenterProfilePageRoutingModule } from './RenterProfile-routing.module';

import { RenterProfilePage } from './RenterProfile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenterProfilePageRoutingModule
  ],
  declarations: [RenterProfilePage]
})
export class RenterProfilePageModule {}
