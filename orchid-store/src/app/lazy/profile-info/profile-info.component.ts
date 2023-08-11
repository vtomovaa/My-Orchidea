import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { __values } from 'tslib';

const fadeInOutSlow = trigger('fadeInOutSlow', [
  transition(':enter', [
    query('h3', [
      style({
        opacity: '0',
      }),
      stagger(300, [
        animate('2s',
          style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ])
])
const fadeInOutFast = trigger('fadeInOutFast', [
  transition(':enter', [
    query('h3', [
      style({
        opacity: '0',
      }),
      stagger(30, [
        animate('2s',
          style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ])
])

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  animations: [fadeInOutFast, fadeInOutSlow]
})
export class ProfileInfoComponent {
  info: any = false;
  currUser: any;
  isLoading = false;
  ip: string | null = null;
  geolocationLoaded: boolean = false;
  constructor(private userService: UserService) {
    this.isLoading = true;
     this.showingInfo()
    // userService.getUserIP().subscribe({
    //   next: (value) => {
    //     this.ip = value.ip
    //     this.showingInfo()
    //   },
    //   error: (err) => console.log(err)
    // })
  }
  showingInfo(){
    if(this.ip){
      this.geolocationLoaded = true;
    }else {
      this.isLoading = false;
      this.currUser = this.userService.user
      return;
    }
    this.userService.getIPaddress(this.ip).subscribe((value) => {
      this.info = value
      this.isLoading = false
      this.currUser = this.userService.user
    })
  }
}
