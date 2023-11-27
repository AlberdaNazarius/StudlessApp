import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading = false;
  error: string | null = null;
  constructor(private authService: AuthService,private router: Router) { }


  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid)
      return;
    
    this.isLoading = true;
    this.authService.login(loginForm.value.email, loginForm.value.password).subscribe({
      next: (resData) => {
        this.isLoading = false;
        this.router.navigate(['/search']);
      },
      error: (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    });
  }
}