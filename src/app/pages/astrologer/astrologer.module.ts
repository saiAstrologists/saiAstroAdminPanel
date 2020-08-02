import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstrologerRoutingModule } from './astrologer-routing.module';
import { AstrologerComponent } from './astrologer.component';
import { SharedModuleModule } from '../../shared-module.module';


@NgModule({
  declarations: [AstrologerComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    AstrologerRoutingModule,
  ]
})
export class AstrologerModule { }
