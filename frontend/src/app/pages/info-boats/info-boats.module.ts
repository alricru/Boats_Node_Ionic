import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoBoatsPageRoutingModule } from './info-boats-routing.module';

import { InfoBoatsPage } from './info-boats.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoBoatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfoBoatsPage]
})
export class InfoBoatsPageModule {}
