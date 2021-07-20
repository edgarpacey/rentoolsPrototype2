import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearByListingsPage } from './NearByListings.page';

const routes: Routes = [
  {
    path: '',
    component: NearByListingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearByListingsPageRoutingModule {}
