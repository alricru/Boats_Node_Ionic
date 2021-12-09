import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBoatsPageRoutingModule } from './create-boats-routing.module';

import { CreateBoatsPage } from './create-boats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBoatsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateBoatsPage]
})
export class CreateBoatsPageModule {}
