import { Injectable } from '@angular/core';
import { RestService } from '../../shared/services/restService/rest.service';
import { ResturlService } from '../../shared/constants/resturl/resturl.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogData: any;

  constructor(private restService: RestService) { }

  createBlog(data){
    return this.restService.create(ResturlService.createBlog, data);
  }
  
  blogList(data){
    return this.restService.getByParams(ResturlService.blogList, data);
  }

  blogDelete(data) {
    return this.restService.delete(ResturlService.deleteBlog, data);
  }

  updateBlog(data){
    return this.restService.put(ResturlService.updateBlog, data);
  }


  setBlogData(data){
    this.blogData = data;
  }
  getBlogData(){
    return this.blogData
  }
}
