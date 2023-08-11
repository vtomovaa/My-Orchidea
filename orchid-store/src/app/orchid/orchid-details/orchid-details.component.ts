import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { handleError } from 'src/app/shared/errorHandler';
import { IOrchid } from 'src/app/shared/interfaces/orchid';
import { UserService } from 'src/app/user/user.service';
import { OrchidService } from '../orchid.service';

@Component({
  selector: 'app-orchid-details',
  templateUrl: './orchid-details.component.html',
  styleUrls: ['./orchid-details.component.css']
})
export class OrchidDetailsComponent {
  orchid: IOrchid | undefined;
  inEditMode: boolean = false;
  token: string | null = localStorage.getItem('token')
  isAuthor: boolean = false;
  errors: Object | undefined;
  alreadyFavourite: boolean = false;
  index: any = 0;
  isLoading: boolean = false;
  constructor(private orchidService: OrchidService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.getOrchid()
  }
  getOrchid(): void {
    this.isLoading = true;
    this.orchid = undefined;
    const id = this.activatedRoute.snapshot.params['id'];
    this.orchidService.getOneOrchid(id).subscribe({
      next: (orchid) => {
        this.orchid = orchid
        this.alreadyFavourite = orchid.addedBy.some((email) => email == this.userService.user?.email)
        this.isLoading = false

        if(this.userService.user && this.userService.user?.email == orchid.owner){
          this.isAuthor = true
        }else {
          this.isAuthor = false;
        }
      },
      error: (err) => {
        this.errors = handleError(err.error?.error)
        console.log(err)
      }
    })
  }
  
  delete(){
    if(this.userService.user?.email != this.orchid?.owner || !this.token){
      this.router.navigate(['**'])
    }
    const id = this.orchid?._id;
    this.orchidService.deleteOrchid(id).subscribe({
      next: () => this.router.navigate(['/orchids']),
      error: (err) => {
        this.errors = handleError(err.error?.error)
      }
    })
  }
  addToFavourite(){
    let id = this.orchid?._id
    let isLogged = this.userService.isLogged
    if(!isLogged){
      this.router.navigate(['login'])
    }else {
      if (!this.orchid || !this.userService.user || !this.userService.user?.email) return
      this.orchid.addedBy.push(this.userService.user.email)
      this.orchidService.addToFavourite(this.orchid).subscribe({
        next: () => {
          this.alreadyFavourite = true;
        }
      })
    }
  }
  removeFromFavourites(){
    let id = this.orchid?._id;
    let isLogged = this.userService.isLogged
    if(!isLogged){
      this.router.navigate(['login'])
    }else {
      if (!this.orchid || !this.userService.user || !this.userService.user?.email) return 
      this.orchid.addedBy = this.orchid.addedBy.filter(item => item !== this.userService.user?.email)

      this.orchidService.removeFromFavourites(this.orchid).subscribe({
        next: () => {
          this.alreadyFavourite = false;
        }
      })
    }
  }
  changeImage(how: string){
    let length: any = this.orchid?.orchidsImages.length
    if(how == 'previous' && this.index > 0){
      how == 'previous' ? this.index-- : this.index++
    }else if(how == 'next' && this.index < length - 1){
      how == 'next' ? this.index++ : this.index--
    }
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
  // editOrchid(form: NgForm) {
  //   if(this.userService.user?._id != this.orchid?.owner._id || !this.token){
  //     this.router.navigate(['**'])
  //   }
  //   const id = this.orchid?._id;
  //   this.OrchidService.editOrchid(id, form.value).subscribe({
  //     next: (orchid) => {
  //       this.orchid = orchid
  //       this.inEditMode = false;
  //     },
  //     error: (err) => {
  //       this.errors = handleError(err.error?.error)
  //     }
  //   })
  // }
  async editOrchid(form: NgForm, imageUrl: any): Promise<any>{

    this.isLoading = true;
    console.log('here')
    // if(this.userService.user?._id != this.orchid?.owner._id){
    //   return this.router.navigate(['**'])
    // }
    const id = this.orchid?._id;
    const file: any = imageUrl.files;
    let base64: any = [];
    if(file){
      for(let el of file) {
        base64.push(await this.convertToBase64(el))
      }
      form.value.base64 = base64
    }

    form.value.owner = this.orchid?.owner
    this.orchidService.editOrchid(id, form.value).subscribe({
      next: (orchid) => {
        this.isLoading = false
        this.orchid = orchid
        this.inEditMode = false;
        this.isAuthor = true
      },
      error: (err) => {
        this.errors = handleError(err.error?.error)
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
