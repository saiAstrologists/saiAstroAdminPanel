import { Injectable } from '@angular/core';
import { HttpRequest,  HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, ignoreElements  } from 'rxjs/operators';
import { LoaderService } from '../../components/loader/loader.service';
import { CommonService } from '../common/common.service';


@Injectable()
export class HttpInterInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
    private commonService: CommonService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add token on request
    if(sessionStorage.getItem('token') && sessionStorage.getItem('token') != ''){
      request = request.clone({
        setHeaders: {
          'Authorization': sessionStorage.getItem('token'),
          // 'token': sessionStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
    }
    // request = request.clone({
    //   headers: request.headers.set('Authorization', 'Bearer ' + sessionStorage.get('token'))
    // });

    // const headers = new HttpHeaders({
    //   'Authorization': 'token 123',
    //   'WEB-API-key': environment.webApiKey,
    //   'Content-Type': 'application/json'
    // });


    // can show loader

    this.loaderService.setLoadingStatus(true);


    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
         console.log('http respponse', event);
         if(event && event.body && event.body.message && event.body.message != ''){
           this.commonService.viewToaster(event.body.message);
         }
         this.loaderService.setLoadingStatus(false);
        }
      }, error => {
        if(error instanceof HttpErrorResponse){
          if(error.status === 500){
            console.log('internal server error');
            this.loaderService.setLoadingStatus(false);
          }
        }
      })
    );
  }
}
