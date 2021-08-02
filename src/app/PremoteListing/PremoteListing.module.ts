import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremoteListingPageRoutingModule } from './PremoteListing-routing.module';

import { PremoteListingPage } from './PremoteListing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremoteListingPageRoutingModule
  ],
  declarations: [PremoteListingPage]
})
export class PremoteListingPageModule {}
