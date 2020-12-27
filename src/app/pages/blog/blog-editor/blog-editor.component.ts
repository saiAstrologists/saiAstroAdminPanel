import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})
export class BlogEditorComponent implements OnInit {
  blogEditor: FormGroup;
  hasBlogData: any;
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogEditor = new FormGroup({
      blogTitle: new FormControl('', [Validators.required]),
      blogBody: new FormControl('', [Validators.required])
    })


    // get blog data if present
    this.hasBlogData = this.blogService.getBlogData();
    if(this.hasBlogData && this.hasBlogData.blogBody !=''){
      console.log(this.hasBlogData);
      this.blogEditor.patchValue({
        blogTitle: this.hasBlogData.blogTitle,
        blogBody: this.hasBlogData.blogBody
      })
    }
    // get blog data if present end
  }

  submitBlog(formData){
    if(formData.valid){
      let userData = JSON.parse(sessionStorage.getItem('user_role'));
      console.log(formData.value, 'value');
      let reqObj = {
        blogTitle: formData.value.blogTitle,
        blogBody: formData.value.blogBody,
        userId: userData.name
      };

      this.blogService.createBlog(reqObj).subscribe(response => {
        console.log(response, 'blog create');
        this.router.navigate(['blog']);
      });
    }
  }

  updateBlog(formData){
    if(formData.valid){
      let userData = JSON.parse(sessionStorage.getItem('user_role'));
      let reqObj = {
        id: this.hasBlogData._id,
        blogContent: {
          blogTitle: formData.value.blogTitle,
          blogBody: formData.value.blogBody,
          userId: userData.name
        }
      }
      this.blogService.updateBlog(reqObj).subscribe(response => {
        console.log(response, 'update');
        this.router.navigate(['blog']);
      })
    }

  }

}
