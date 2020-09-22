import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstrologerRoutingModule } from './astrologer-routing.module';
import { AstrologerComponent } from './astrologer.component';
import { SharedModuleModule } from '../../shared-module.module';
import { AstrologerProfileComponent } from './astrologer-profile/astrologer-profile.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { DocumentSliderComponent } from './document-slider/document-slider.component';
import { AstroFeaturesComponent } from './astro-features/astro-features.component';


@NgModule({
  declarations: [AstrologerComponent, AstrologerProfileComponent, ConfirmationModalComponent, DocumentSliderComponent, AstroFeaturesComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    AstrologerRoutingModule,
  ],
  exports: [
    ConfirmationModalComponent,
    DocumentSliderComponent
  ]
})
export class AstrologerModule { }
