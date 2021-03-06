import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'list-managers',
        loadChildren: () => import('../lists/list-managers/list-managers.module').then(m => m.ListManagersPageModule)
      },
      {
        path: 'create-managers',
        loadChildren: () => import('../create/create-managers/create-managers.module').then( m => m.CreateManagersPageModule)
      },
      {
        path: 'list-boats',
        loadChildren: () => import('../lists/list-boats/list-boats.module').then( m => m.ListBoatsPageModule)
      },
      {
        path: 'update-managers',
        loadChildren: () => import('../update/update-managers/update-managers.module').then( m => m.UpdateManagersPageModule)
      },
      {
        path: 'update-boats',
        loadChildren: () => import('../update/update-boats/update-boats.module').then( m => m.UpdateBoatsPageModule)
      },
      {
        path: 'create-boats',
        loadChildren: () => import('../create/create-boats/create-boats.module').then( m => m.CreateBoatsPageModule)
      },
      {
        path: 'update-boats',
        loadChildren: () => import('../update/update-boats/update-boats.module').then( m => m.UpdateBoatsPageModule)
      },
      {
        path: 'info-managers',
        loadChildren: () => import('../info-managers/info-managers.module').then( m => m.InfoManagersPageModule)
      },
      {
        path: 'info-boats',
        loadChildren: () => import('../info-boats/info-boats.module').then( m => m.InfoBoatsPageModule)
      },
    
    ]
  },
  {
    path: '',
    redirectTo: '/menu/info'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
