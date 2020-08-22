import { Injectable } from '@angular/core';
import { HttpRequest,  HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap  } from 'rxjs/operators';


@Injectable()
export class HttpInterInterceptor implements HttpInterceptor {

  constructor() {}

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

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
         console.log('http respponse');
        }
      }, error => {
        if(error instanceof HttpErrorResponse){
          if(error.status === 500){
            console.log('internal server error')
          }
        }
      })
    );
  }
}
