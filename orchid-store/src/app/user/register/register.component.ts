import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { handleError } from 'src/app/shared/errorHandler';
import { emailValidator, passwordValidator } from 'src/app/shared/validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  file: any;
  form!: FormGroup;
  errors: string | undefined = undefined;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      rePass: ['', [Validators.required, passwordValidator]],
    });
  }
  convertToBase64(file: any){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
  async register(avatarImg: any){
    this.isLoading = true;
    const file: File = avatarImg.files[0];
    if(file){
      let base64 = await this.convertToBase64(file)
      this.form.value.avatarImg = base64;
    }
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errors = handleError(err.error?.error)
      }
    })
  }
  async onChange(avatar: any){
    document.getElementById('avatar')?.classList.add('avatarImg')
    const file: File = avatar.files[0];
    this.file = await this.convertToBase64(file)
  }
}
