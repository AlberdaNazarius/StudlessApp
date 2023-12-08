import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {HttpClient} from "@angular/common/http";
import {of, Observable} from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UserService {
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

  getUser(id: number): Observable<User | null> {
    return this.http.get<any>(`http://localhost:5074/api/profile/${id}`).pipe(
      map((data: any) => {
        this.user = data;
        return this.user;
      }),
      catchError((error) => {
        console.error('Error getting user', error);
        return of(null); 
      })
    );
  }


}
