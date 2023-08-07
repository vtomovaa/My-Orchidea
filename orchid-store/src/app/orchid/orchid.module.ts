import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrchidRoutingModule } from './orchid-routing.module'
import { AllOrchidsComponent } from './all-orchids/all-orchids.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddOrchidComponent } from './add-orchid/add-orchid.component';


@NgModule({
  declarations: [
    AddOrchidComponent,
    AllOrchidsComponent
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
