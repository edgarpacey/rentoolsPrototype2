import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsPageRoutingModule } from './AboutUs-routing.module';

import { AboutUsPage } from './AboutUs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUsPageRoutingModule
  ],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}
