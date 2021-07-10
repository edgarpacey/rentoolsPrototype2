import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickToolsPageRoutingModule } from './PickTools-routing.module';

import { PickToolsPage } from './PickTools.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickToolsPageRoutingModule
  ],
  declarations: [PickToolsPage]
})
export class PickToolsPageModule {}
