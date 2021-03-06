import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickRenterPage } from './PickRenter.page';

const routes: Routes = [
  {
    path: '',
    component: PickRenterPage
  },
  {
    path: 'RenterProfile/:id',
    loadChildren: () => import('../RenterProfile/RenterProfile.module').then( m => m.RenterProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickRenterPageRoutingModule {}
