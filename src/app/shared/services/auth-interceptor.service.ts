import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = this.authService.authData;
    if (!token)
      return next.handle(req);

    let modifiedReq = req.clone({
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    });
    return next.handle(modifiedReq);
  }
}