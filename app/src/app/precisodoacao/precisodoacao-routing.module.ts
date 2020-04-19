import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecisodoacaoPage } from './precisodoacao.page';

const routes: Routes = [
  {
    path: '',
    component: PrecisodoacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecisodoacaoPageRoutingModule {}
