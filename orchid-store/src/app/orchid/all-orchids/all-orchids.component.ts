import { Component } from '@angular/core';
import { IOrchid } from 'src/app/shared/interfaces/orchid';
import { OrchidService } from '../orchid.service';

@Component({
  selector: 'app-all-orchids',
  templateUrl: './all-orchids.component.html',
  styleUrls: ['./all-orchids.component.css']
})
export class AllOrchidsComponent {
  p: Number | any = 1;
  orchids: IOrchid[] | undefined
  orchidsLength: any 
  isEmpty: boolean = false;
  constructor(private orchidService: OrchidService){
    this.getAllOrchids()
  }

  getAllOrchids(){
    this.orchids = undefined;
    this.orchidService.getAllOrchids().subscribe({
      next: (orchids) => {
        debugger
        this.orchids = orchids
        this.orchidsLength = orchids.length || 0
        if(orchids.length == 0){
          this.isEmpty = true;
        }
      }
    })
  }
}
