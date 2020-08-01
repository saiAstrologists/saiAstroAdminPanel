import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstrologerRoutingModule } from './astrologer-routing.module';
import { AstrologerComponent } from './astrologer.component';


@NgModule({
  declarations: [AstrologerComponent],
  imports: [
    CommonModule,
    AstrologerRoutingModule
  ]
})
export class AstrologerModule { }
