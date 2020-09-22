import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstrologerComponent } from './astrologer.component';
import { AstrologerProfileComponent } from './astrologer-profile/astrologer-profile.component';
import { AstroFeaturesComponent } from './astro-features/astro-features.component';

const routes: Routes = [
  {
    path: '',
    component: AstrologerComponent
  },
  {
    path: 'astro-profile/:id',
    component: AstrologerProfileComponent
  },
  {
    path: 'astro-features',
    component: AstroFeaturesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AstrologerRoutingModule { }
