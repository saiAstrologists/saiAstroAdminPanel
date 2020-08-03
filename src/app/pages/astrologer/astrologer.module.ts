import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstrologerRoutingModule } from './astrologer-routing.module';
import { AstrologerComponent } from './astrologer.component';
import { SharedModuleModule } from '../../shared-module.module';
import { AstrologerProfileComponent } from './astrologer-profile/astrologer-profile.component';


@NgModule({
  declarations: [AstrologerComponent, AstrologerProfileComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    AstrologerRoutingModule,
  ]
})
export class AstrologerModule { }
