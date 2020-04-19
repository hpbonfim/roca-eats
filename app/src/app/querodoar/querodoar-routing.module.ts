import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuerodoarPage } from './querodoar.page';

const routes: Routes = [
  {
    path: '',
    component: QuerodoarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuerodoarPageRoutingModule {}
