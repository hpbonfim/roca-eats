import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';
import { UserService } from 'src/app/services/auth/user.services';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [UserService],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
