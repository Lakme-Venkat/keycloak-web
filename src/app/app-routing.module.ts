import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './util/app.guard';

const routes: Routes = [
  // {path:'employee', component: EmployeeListComponent , canActivate: [AuthGuard]},
  {path:'employee', component: EmployeeListComponent },
  {path:'login', component: LoginComponent},
  {path:'',pathMatch:'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
