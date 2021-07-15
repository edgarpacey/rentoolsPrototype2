import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountPage } from './CreateAccount.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountPage
  },
  {
    path: 'home/:id',
    loadChildren: () => import('../folder/folder.module').then( m => m.folderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAccountPageRoutingModule {}
