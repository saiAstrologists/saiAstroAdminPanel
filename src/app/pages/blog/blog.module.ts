import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SharedModuleModule } from '../../shared-module.module';
import { BlogComponent } from './blog.component';
import { BlogDeleteConfirmationComponent } from './blog-delete-confirmation/blog-delete-confirmation.component';


@NgModule({
  declarations: [BlogComponent, BlogEditorComponent, BlogDeleteConfirmationComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    BlogRoutingModule,
    EditorModule,    
  ]
})
export class BlogModule { }
