import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoManagersPage } from './info-managers.page';

const routes: Routes = [
  {
    path: '',
    component: InfoManagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoManagersPageRoutingModule {}
