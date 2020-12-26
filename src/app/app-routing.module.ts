import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/authentication/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin/login',
    loadChildren: () => import('./pages/login/login.module').then(page => page.LoginModule)
  },
  {
    path: 'admin/subadmin',
    loadChildren: () => import('./pages/subadmin/subadmin.module').then(page => page.SubadminModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(page => page.DashboardModule),
  },
  {
    path: 'admin/astrologer',
    loadChildren: () => import('./pages/astrologer/astrologer.module').then(page => page.AstrologerModule),
  },
  {
    path: 'admin/blog',
    loadChildren: () => import('./pages/blog/blog.module').then(page => page.BlogModule),
  },
  {
    path: 'admin/',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
