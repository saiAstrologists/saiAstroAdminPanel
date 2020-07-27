import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminRoutingModule } from './subadmin-routing.module';
import { SubadminComponent } from './subadmin.component';


@NgModule({
  declarations: [SubadminComponent],
  imports: [
    CommonModule,
    SubadminRoutingModule
  ]
})
export class SubadminModule { }
