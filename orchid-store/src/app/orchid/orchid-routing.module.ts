import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { ErrorComponent } from "../user/error/error.component";
import { AllOrchidsComponent } from "./all-orchids/all-orchids.component";
import { AddOrchidComponent } from "./add-orchid/add-orchid.component";
import { OrchidDetailsComponent } from "./orchid-details/orchid-details.component"; 

const routes: Routes = [
    {
        path: 'add',
        component: AddOrchidComponent,
        canActivate: [AuthGuard],
        data: {
            'guest': false,
        }
    },
    {
        path: 'orchids',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: AllOrchidsComponent,
            },
            {
                path: ':id',
                component: OrchidDetailsComponent
            }
        ]
    },
    {
        path: 'error',
        component: ErrorComponent,
    },
    {
        path: '**',
        redirectTo: 'error',
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrchidRoutingModule { }