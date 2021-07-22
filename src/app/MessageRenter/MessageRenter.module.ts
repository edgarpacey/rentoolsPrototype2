import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageRenterPageRoutingModule } from './MessageRenter-routing.module';

import { MessageRenterPage } from './MessageRenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageRenterPageRoutingModule
  ],
  declarations: [MessageRenterPage]
})
export class MessageRenterPageModule {}
