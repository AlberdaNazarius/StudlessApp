import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  isLoading = false;
  error: string | null = null;

  constructor(private authService: AuthService,
    private router: Router) { }

  onSubmit(signUpForm: NgForm) {
    if (!signUpForm.valid)
      return;

    this.isLoading = true;

    this.authService.signup(signUpForm.value.username, signUpForm.value.email, signUpForm.value.password).subscribe({
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
