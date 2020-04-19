import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class XHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const headersConfig = {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      //'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      //'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    };

    console.log(request.url);

    if(!request.url.startsWith("http://viacep.com.br/")){
      request = request.clone({ setHeaders: headersConfig });
    }
    
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        
      }),
      catchError((error, caught) => {
      console.log(error);
      return of(error);
    }) as any);
  }
}
