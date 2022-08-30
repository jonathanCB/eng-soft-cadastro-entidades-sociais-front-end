import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const headers = httpRequest.headers
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer ' + JSON.parse(localStorage.getItem('USUARIO') as string).token
      );

    const authReq = httpRequest.clone({ headers });

    return next.handle(authReq);
  }
}
