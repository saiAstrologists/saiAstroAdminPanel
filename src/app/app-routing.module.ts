import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/authentication/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(page => page.LoginModule)
  },
  {
    path: 'subadmin',
    loadChildren: () => import('./pages/subadmin/subadmin.module').then(page => page.SubadminModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(page => page.DashboardModule),
  },
  {
    path: 'astrologer',
    loadChildren: () => import('./pages/astrologer/astrologer.module').then(page => page.AstrologerModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(page => page.BlogModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
