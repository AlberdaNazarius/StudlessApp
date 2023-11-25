import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthExpiredInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.authService.logout();
        return throwError(() => 'Token Expired');
      }

      return throwError(() => 'Other Error');
    }));
  }
}
