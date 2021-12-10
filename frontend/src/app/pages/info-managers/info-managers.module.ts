import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoManagersPageRoutingModule } from './info-managers-routing.module';

import { InfoManagersPage } from './info-managers.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoManagersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfoManagersPage]
})
export class InfoManagersPageModule {}
