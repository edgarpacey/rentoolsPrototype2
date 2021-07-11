import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenterPage } from './Renter.page';

const routes: Routes = [
  {
    path: '',
    component: RenterPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenterPageRoutingModule {}
