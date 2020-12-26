import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'blog-editor',
    component: BlogEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
