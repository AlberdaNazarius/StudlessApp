import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { AdminService } from '../shared/services/admin.service';
import { User } from '../shared/models/user.model';
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  users: User[];
  constructor(private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.adminService.admin().subscribe(responseData => {
      this.users = responseData;
    })
  }
 

  banUser(id:number): void {
    this.adminService.banUser(id).subscribe({
      next: (resData) => {
        console.log("user "+ id+ " successfully banned")
        console.log(resData)
        window.location.reload();
      },
      error: (errorMessage) => {
        console.log(errorMessage)
        window.location.reload();
      }
    });
  }
}
