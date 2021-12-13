import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoManagersPageRoutingModule } from './info-managers-routing.module';

import { InfoManagersPage } from './info-managers.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoManagersPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  declarations: [InfoManagersPage]
})
export class InfoManagersPageModule {}
