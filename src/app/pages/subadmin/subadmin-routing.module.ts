import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubadminComponent } from './subadmin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';

const routes: Routes = [
  {
    path: '',
    component: SubadminComponent
  },
  {
    path: 'adminform',
    component: AdminFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubadminRoutingModule { }
