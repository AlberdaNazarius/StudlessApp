import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  user: User;
  // TODO this values should be changed when person is logged or not
  isLogged: boolean = true;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getAuthenticatedUser()
  }
}
