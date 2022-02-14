import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './component/authentication.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbooksComponent } from './component/getallbooks/getallbooks.component';
import { GetcartComponent } from './component/getcart/getcart.component';
import { LoginComponent } from './component/login/login.component';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { SignupComponent } from './component/signup/signup.component';


const routes: Routes = [
  { path:'', redirectTo:"/login", pathMatch:'full'}, //this is done so whenever we will do ng serve at first login page should open and then after logging in we should get redirected to dashboard page
  { path:'signup',component:SignupComponent},
  { path:'login',component:LoginComponent},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
   
  children:[
   { path:'', redirectTo:"/dashboard/getallbooks", pathMatch:'full'},
   { path:'getallbooks',component:GetallbooksComponent},
   { path:'quickview/:bookId',component:QuickviewComponent},  // we are giving /:book._id just for setting path for getting particular book by its id and we can give any name instead of book._id
   { path:'getcart',component:GetcartComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
