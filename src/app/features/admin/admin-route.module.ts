import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/admin-home/dashboard/dashboard.component";
import { adminAuthGuard } from "./route-guards/admin-auth.guard";
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
import { MainPageComponent } from "./components/admin-home/admin-home.component";
import { ManagementComponent } from "./components/admin-home/management/management.component";
import { UserProfileCommonViewComponent } from "../../shared/components/user-profile-common-view/user-profile-common-view.component";
import { CompanyProfileCommonViewComponent } from "../../shared/components/company-profile-common-view/company-profile-common-view.component";
import { JobDetailedViewComponent } from "../../shared/components/job-detailed-view/job-detailed-view.component";
const routes: Routes = [
    { path: '', component:MainPageComponent, children:[
        { path: 'dashboard', component: DashboardComponent  },
        { path: 'users', component:ManagementComponent },
        { path: 'user/:id', component:UserProfileCommonViewComponent },
        { path: 'companies', component:ManagementComponent },
        { path: 'company/:id', component:CompanyProfileCommonViewComponent },
        { path: 'jobs', component:ManagementComponent },
        { path: 'job/:context/:id', component:JobDetailedViewComponent }
    ], canActivate:[adminAuthGuard]},
    { path: 'login', component: AdminLoginComponent }, 
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class adminRouteModule { }