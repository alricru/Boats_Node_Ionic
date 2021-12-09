import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateManagersPageRoutingModule } from './update-managers-routing.module';

import { UpdateManagersPage } from './update-managers.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateManagersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateManagersPage]
})
export class UpdateManagersPageModule {}
