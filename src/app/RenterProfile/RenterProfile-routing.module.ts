import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenterProfilePage } from './RenterProfile.page';

const routes: Routes = [
  {
    path: '',
    component: RenterProfilePage
  },
  {
    path: 'Renter/:id',
    loadChildren: () => import('../Renter/Renter.module').then( m => m.RenterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenterProfilePageRoutingModule {}
