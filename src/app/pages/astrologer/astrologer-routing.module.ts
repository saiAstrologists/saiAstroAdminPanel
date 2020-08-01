import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstrologerComponent } from './astrologer.component';

const routes: Routes = [
  {
    path: '',
    component: AstrologerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstrologerRoutingModule { }
