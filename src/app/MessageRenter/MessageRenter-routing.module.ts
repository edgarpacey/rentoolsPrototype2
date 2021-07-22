import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageRenterPage } from './MessageRenter.page';

const routes: Routes = [
  {
    path: '',
    component: MessageRenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRenterPageRoutingModule {}
