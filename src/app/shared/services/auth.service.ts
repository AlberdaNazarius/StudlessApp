import { Injectable } from '@angular/core';
import { Subject, delay, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthDataHelper } from '../utils/auth-data-utils';
import { User } from 'src/app/shared/models/user.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authData$ = new Subject<string | null>();
  private _authData: string | null = null;

  get authData() { return this._authData; }

  set authData(newAuthData) {
    this._authData = newAuthData;
    this.authData$.next(this._authData);

    if (!this._authData) {
      localStorage.removeItem('token');
      return;
    }
    localStorage.setItem('token', this._authData);
  }

  constructor(private router: Router, private http: HttpClient) { }

  signup(username: string, email: string, password: string) {


     // TODO: Remove this and implement http request for registration
    let observable = of("valid_test_token").pipe(delay(2000));
    observable.subscribe(res => {
      this.authData = res;
    })
    return observable;
  }

  login(email: string, password: string) {
    // TODO: Remove this and implement http request for login
    let observable = of("valid_test_token").pipe(delay(2000));
    observable.subscribe(res => {
      this.authData = res;
    })
    return observable;
  }

  autoLogin() {
    let storedToken = localStorage.getItem('token');
    if (!storedToken)
      return;

    if (AuthDataHelper.isValid(storedToken))
      this.authData = storedToken;
  }

  logout() {
    this.authData = null;
    this.router.navigate(['']);
  }
}
