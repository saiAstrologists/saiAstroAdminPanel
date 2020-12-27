import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { HttpParams } from '../../../../node_modules/@angular/common/http';
import { BlogDeleteConfirmationComponent } from './blog-delete-confirmation/blog-delete-confirmation.component';
import { MatDialog } from '../../../../node_modules/@angular/material/dialog';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogList = [];
  constructor(private blogService: BlogService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getBlogList();
  }

  getBlogList(){
    let userData = JSON.parse(sessionStorage.getItem('user_role'));
    if(userData && userData.name) {
      let params = new HttpParams().set('userId', userData.name);
      this.blogService.blogList(params).subscribe(response => {
        if(response){
          this.blogList = response;
        }
      })
    }
  }

  deleteBlog(blogData, i){
    const dialogRef = this.dialog.open(BlogDeleteConfirmationComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(modalResponse => {
      if(modalResponse == 'yes'){
        let params = new HttpParams().set('id', blogData._id);
        this.blogService.blogDelete(params).subscribe(response => {
          if(response){
            console.log(response, 'delete');
            this.blogList.splice(i, 1);
          }
        })
      }
    })
  }

  editBlog(blogData){
    this.blogService.setBlogData(blogData);
    this.router.navigate(['blog/blog-editor']);
  }

  addBlog(){
    this.blogService.setBlogData(null);
    this.router.navigate(['blog/blog-editor']);
  }

}
