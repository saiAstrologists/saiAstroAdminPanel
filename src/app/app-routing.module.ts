import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(page => page.LoginModule)
  },
  {
    path: 'subadmin',
    loadChildren: () => import('./pages/subadmin/subadmin.module').then(page => page.SubadminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
