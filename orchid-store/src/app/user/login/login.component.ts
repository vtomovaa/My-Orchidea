import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { handleError } from 'src/app/shared/errorHandler';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  isLoading: boolean = false;
  // IF AUTH GUARD IS NOT WORKING, USE THIS ---
  // isAuthenticating: boolean = false;
  // ngOnInit(): void {
  //   if(localStorage.getItem('token')){
  //     // this.router.navigate(['error'])
  //   }else {
  //     this.isAuthenticating = false;
  //   };
  // }
  constructor(private userService: UserService, private router: Router){

  }
  errors: string | undefined = undefined;
  login(form: NgForm): void{
    this.isLoading = true;
    this.userService.login(form.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.errors = handleError(err.error?.error)
      }
    })
  }
}
