import { Injectable } from '@angular/core';
import { AuthData } from '../models/auth-data.model';
import { Subject, delay, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authData$ = new Subject<AuthData>();
  private _authData: AuthData = new AuthData(null);

  get authData() { return this._authData; }

  set authData(newAuthData) {
    this._authData = newAuthData;
    this.authData$.next(this._authData);

    if (!this._authData.token) {
      localStorage.removeItem('token');
      return;
    }
    localStorage.setItem('token', this._authData.token);
  }

  constructor(private router: Router) { }

  signup(username: string, email: string, password: string) {
    // TODO: Remove this and implement http request for registration
    let observable = of("valid_test_token").pipe(delay(2000));
    observable.subscribe(res => {
      this.authData = new AuthData(res);
    })
    return observable;
  }

  login(email: string, password: string) {
    // TODO: Remove this and implement http request for login
    let observable = of("valid_test_token").pipe(delay(2000));
    observable.subscribe(res => {
      this.authData = new AuthData(res);
    })
    return observable;
  }

  autoLogin() {
    let storedToken = localStorage.getItem('token');
    if (!storedToken)
      return;

    let loadedAuthData = new AuthData(storedToken);

    if (loadedAuthData.token)
      this.authData = loadedAuthData;
  }

  logout() {
    this.authData = new AuthData(null);
    this.router.navigate(['']);
  }
}
