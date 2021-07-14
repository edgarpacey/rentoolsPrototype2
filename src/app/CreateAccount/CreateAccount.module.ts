import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountPageRoutingModule } from './CreateAccount-routing.module';

import { CreateAccountPage } from './CreateAccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccountPageRoutingModule
  ],
  declarations: [CreateAccountPage]
})
export class CreateAccountPageModule {}
