import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstrologerComponent } from './astrologer.component';
import { AstrologerProfileComponent } from './astrologer-profile/astrologer-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AstrologerComponent
  },
  {
    path: 'astro-profile',
    component: AstrologerProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AstrologerRoutingModule { }
