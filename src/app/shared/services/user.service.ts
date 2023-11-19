import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private user: User = new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","fda", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5)
    

  public getUser(): User {
    return this.user;
  }
}