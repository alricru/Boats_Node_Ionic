import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBoatsPage } from './create-boats.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBoatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBoatsPageRoutingModule {}
