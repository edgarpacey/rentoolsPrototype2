import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInOutPage } from './LogInOut.page';

const routes: Routes = [
  {
    path: '',
    component: LogInOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInOutPageRoutingModule {}
