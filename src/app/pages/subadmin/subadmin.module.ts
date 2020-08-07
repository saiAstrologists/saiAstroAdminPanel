import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminRoutingModule } from './subadmin-routing.module';
import { SubadminComponent } from './subadmin.component';
import { SharedModuleModule } from '../../shared-module.module';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminConfirmationModalComponent } from './admin-confirmation-modal/admin-confirmation-modal.component';


@NgModule({
  declarations: [SubadminComponent, AdminFormComponent, AdminConfirmationModalComponent],
  imports: [
    CommonModule,
    SubadminRoutingModule,
    SharedModuleModule
  ],
  exports: [
    AdminFormComponent,
    AdminConfirmationModalComponent
  ]
})
export class SubadminModule { }
