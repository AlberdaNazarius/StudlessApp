import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AuthDataHelper } from '../shared/utils/auth-data-utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userId = -1;
  userName = '';
  isLogged: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.checkAuthData(this.authService.authData);

    this.authService.authData$.subscribe((res) => {
      this.checkAuthData(res);
    })
  }

  checkAuthData(token: string | null) {
    if (!token) {
      this.isLogged = false;
      return;
    }
    this.userId = AuthDataHelper.getUserId(token);
    this.userName = AuthDataHelper.getUserName(token);
    this.isLogged = true;
  }

  onLogout() {
    this.authService.logout();
  }
}
