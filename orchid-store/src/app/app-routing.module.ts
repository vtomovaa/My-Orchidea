import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './user/error/error.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';
import { FavouriteOrchidsComponent } from './user/favourite-orchids/favourite-orchids.component';
import { MyOrchidsComponent } from './user/my-orchids/my-orchids.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': true,
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': true,
    },

  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': false,
    }
  },
  {
    path: 'profile-info',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
    canActivate: [AuthGuard],
    data: {
      'guest': false,
    }
  },
  {
    path: 'favourites-profile',
    component: FavouriteOrchidsComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': false,
    }
  },
  {
    path: 'my-orchids',
    component: MyOrchidsComponent,
    canActivate: [AuthGuard],
    data: {
      'guest': false,
    }
  }
   
  // {
  //   path: '**',
  //   component: ErrorComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
