import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {HttpClient} from "@angular/common/http";
import {of, Observable} from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) {}
  private users: User[] = [
    /*
    new User(0, "assets/images/profile-logo.png", "assets/images/profile-banner.png","FirstUser", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5),
    new User(1, "assets/images/profile-logo.png", "assets/images/profile-banner.png","SecondUser", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5),
    new User(2, "assets/images/profile-logo.png", "assets/images/profile-banner.png","ThirdUser", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5),
    new User(3, "assets/images/profile-logo.png", "assets/images/profile-banner.png","FourthUser", "moderator", 331, 3234, 0, 1, 6258, 22435, new Date('2023-11-01'), 5)
    */
  ]
  private user: User;

  admin() {
    return this.http.get<User[]>(`http://localhost:5074/api/admin`)
  }
  banUser(id: number){
    return this.http.delete<any>(`http://localhost:5074/api/admin/user/ban/${id}`);
  }
}
