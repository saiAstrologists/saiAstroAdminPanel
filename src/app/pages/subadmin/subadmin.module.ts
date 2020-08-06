import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminRoutingModule } from './subadmin-routing.module';
import { SubadminComponent } from './subadmin.component';
import { SharedModuleModule } from '../../shared-module.module';
import { AdminFormComponent } from './admin-form/admin-form.component';


@NgModule({
  declarations: [SubadminComponent, AdminFormComponent],
  imports: [
    CommonModule,
    SubadminRoutingModule,
    SharedModuleModule
  ],
  exports: [
    AdminFormComponent
  ]
})
export class SubadminModule { }
