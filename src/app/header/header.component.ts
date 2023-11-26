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
    this.authService.authData$.subscribe((res) => {
      if (!res) {
        this.isLogged = false;
        return;
      }
      this.userId = AuthDataHelper.getUserId(res);
      this.userName = AuthDataHelper.getUserName(res);
      this.isLogged = true;
    })
  }
}
