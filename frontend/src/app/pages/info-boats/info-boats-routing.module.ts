import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoBoatsPage } from './info-boats.page';

const routes: Routes = [
  {
    path: '',
    component: InfoBoatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBoatsPageRoutingModule {}
