import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoMapFilterPage } from './GeoMapFilter.page';

const routes: Routes = [
  {
    path: '',
    component: GeoMapFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoMapFilterPageRoutingModule {}
