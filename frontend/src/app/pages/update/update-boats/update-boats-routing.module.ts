import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBoatsPage } from './update-boats.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBoatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBoatsPageRoutingModule {}
