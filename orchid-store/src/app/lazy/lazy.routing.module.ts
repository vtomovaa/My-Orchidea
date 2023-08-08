import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GlobalProfileComponent } from "./global-profile/global-profile.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";

const routes: Routes = [ 
    {
        path: '',
        pathMatch: 'full',
        component: ProfileInfoComponent,
    },
    {
      path: ':owner',
      component: GlobalProfileComponent,
    },
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LazyRoutingModule { }
  