import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateListingPage } from './CreateListing.page';

const routes: Routes = [
  {
    path: '',
    component: CreateListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateListingPageRoutingModule {}
