import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrchidRoutingModule } from './orchid-routing.module'
import { AllOrchidsComponent } from './all-orchids/all-orchids.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddOrchidComponent } from './add-orchid/add-orchid.component';
import { OrchidDetailsComponent } from './orchid-details/orchid-details.component';
import { OrchidDetailsCardComponent } from './orchid-details-card/orchid-details-card.component';
import { FavouriteOrchidsComponent } from '../user/favourite-orchids/favourite-orchids.component';
import { MyOrchidsComponent } from '../user/my-orchids/my-orchids.component';



@NgModule({
  declarations: [
    AddOrchidComponent,
    AllOrchidsComponent,
    OrchidDetailsComponent,
    OrchidDetailsCardComponent,
    FavouriteOrchidsComponent,
    MyOrchidsComponent

  ],
  imports: [
    CommonModule,
    OrchidRoutingModule,
    RouterModule,
    
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
})
export class OrchidModule { }
