import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateManagersPage } from './update-managers.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateManagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateManagersPageRoutingModule {}
