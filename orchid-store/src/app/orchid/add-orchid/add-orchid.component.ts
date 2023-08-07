import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { handleError } from 'src/app/shared/errorHandler';
import { OrchidService } from '../orchid.service';

@Component({
  selector: 'app-add-orchid',
  templateUrl: './add-orchid.component.html',
  styleUrls: ['./add-orchid.component.css'],
  
})
export class AddOrchidComponent{

  isLoading: boolean = false;
  errors: string | undefined = undefined;
  constructor(private orchidService: OrchidService, private router: Router){

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
  async addOrchid(form: NgForm, imageUrl: any){
    this.isLoading = true;
    const file: any = imageUrl.files;
    let base64: any = [];
    if(file){
      for(let el of file) {
        base64.push(await this.convertToBase64(el))
      }
      form.value.base64 = base64
    }
    this.orchidService.addOrchid(form.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/orchids'])
      },
      error: (err) => {
        this.errors = handleError(err?.error?.error)
      }
    })
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
  }
  onChange(input: any){
    if(input.value == 'ImageURL'){
      let imageInput: any = document.getElementById('url');
      imageInput.style.display = 'block'
      let fileInput: any = document.getElementById('file');
      fileInput.style.display = 'none'
    }else if(input.value == 'UploadFile') {
      let imageInput: any = document.getElementById('url');
      imageInput.style.display = 'none'
      let fileInput: any = document.getElementById('file');
      fileInput.style.display = 'block'
    }
  }
}
