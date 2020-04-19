import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuerodoarPageRoutingModule } from './querodoar-routing.module';

import { QuerodoarPage } from './querodoar.page';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/auth/user.services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuerodoarPageRoutingModule
  ],
  providers: [AuthService, UserService],
  declarations: [QuerodoarPage]
})
export class QuerodoarPageModule {}
