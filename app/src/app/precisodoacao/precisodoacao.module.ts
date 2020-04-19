import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrecisodoacaoPageRoutingModule } from './precisodoacao-routing.module';

import { PrecisodoacaoPage } from './precisodoacao.page';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/auth/user.services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecisodoacaoPageRoutingModule
  ],
  providers: [AuthService, UserService],
  declarations: [PrecisodoacaoPage]
})
export class PrecisodoacaoPageModule {}
