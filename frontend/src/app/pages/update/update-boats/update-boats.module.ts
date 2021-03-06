import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBoatsPageRoutingModule } from './update-boats-routing.module';

import { UpdateBoatsPage } from './update-boats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBoatsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateBoatsPage]
})
export class UpdateBoatsPageModule {}
