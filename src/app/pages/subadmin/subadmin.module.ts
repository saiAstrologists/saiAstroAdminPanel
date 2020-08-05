import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminRoutingModule } from './subadmin-routing.module';
import { SubadminComponent } from './subadmin.component';
import { SharedModuleModule } from '../../shared-module.module';


@NgModule({
  declarations: [SubadminComponent],
  imports: [
    CommonModule,
    SubadminRoutingModule,
    SharedModuleModule
  ]
})
export class SubadminModule { }
