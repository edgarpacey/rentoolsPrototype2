import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInOutPage } from './LogInOut.page';

const routes: Routes = [
  {
    path: '',
    component: LogInOutPage
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
export class LogInOutPageRoutingModule {}
