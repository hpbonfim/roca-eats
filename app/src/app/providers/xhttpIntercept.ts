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
      'Accept': 'application/json'
      // , 'Transfer-Encoding': 'chunked'
    };

    request = request.clone({ setHeaders: headersConfig });

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        
      }),
      catchError((error, caught) => {
      console.log(error);
      return of(error);
    }) as any);
  }
}
