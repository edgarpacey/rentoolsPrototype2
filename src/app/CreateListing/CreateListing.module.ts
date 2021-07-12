import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateListingPageRoutingModule } from './CreateListing-routing.module';

import { CreateListingPage } from './CreateListing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateListingPageRoutingModule
  ],
  declarations: [CreateListingPage]
})
export class CreateListingPageModule {}
