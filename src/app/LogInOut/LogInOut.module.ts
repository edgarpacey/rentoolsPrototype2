import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInOutPageRoutingModule } from './LogInOut-routing.module';

import { LogInOutPage } from './LogInOut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInOutPageRoutingModule
  ],
  declarations: [LogInOutPage]
})
export class LogInOutPageModule {}
