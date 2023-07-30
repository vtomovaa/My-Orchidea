import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeComponent],
  providers: [AuthGuard]
})
export class CoreModule { }
