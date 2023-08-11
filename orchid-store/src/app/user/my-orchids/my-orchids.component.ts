import { Component } from '@angular/core';
import { OrchidService } from 'src/app/orchid/orchid.service';
import { IOrchid } from 'src/app/shared/interfaces/orchid';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-orchids',
  templateUrl: './my-orchids.component.html',
  styleUrls: ['./my-orchids.component.css']
})
export class MyOrchidsComponent {
  orchids: IOrchid[] | any = null;;
  isEmpty: boolean = false;
  isLoading: boolean = false;
  p: Number | any = 1;
  constructor(private orchidService: OrchidService, private userService: UserService) {
    this.getMyOrchids()
  }
  getMyOrchids() {
    this.isLoading = true;
    this.orchidService.getMyOrchids(this.userService.user?.email).subscribe({
      next: (value) => {
        this.isLoading = false;
        this.orchids = value
        if (value.length == 0) {
          this.isEmpty = true;
        }
      },
      error: (err) => console.log(err),

    })

  }
}
