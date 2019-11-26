import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FresherComponent } from './fresher/fresher.component';
import { ProfessionComponent } from './profession/profession.component';
import { EductionComponent } from './eduction/eduction.component';



const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'fresher',component:FresherComponent},
  {path:'profession',component:ProfessionComponent},
  {path:'eduction',component:EductionComponent},
  {path:'**',redirectTo:''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
