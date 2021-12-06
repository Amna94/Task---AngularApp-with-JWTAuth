import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailFormComponent } from './city-details/city-detail-form/city-detail-form.component';
import { CountryDetailFormComponent } from './country-details/country-detail-form/country-detail-form.component';
import { RoleDetailFormComponent } from './role-details/role-detail-form/role-detail-form.component';
import { PermissionDetailFormComponent } from './permission-details/permission-detail-form/permission-detail-form.component';
import { RpDetailFormComponent } from './rp-details/rp-detail-form/rp-detail-form.component';
import { UsersDetailFormComponent } from './users-details/users-detail-form/users-detail-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  
  {path: 'city-detail-form', component: CityDetailFormComponent},
  {path: 'country-detail-form', component: CountryDetailFormComponent},
  {path: 'role-detail-form', component: RoleDetailFormComponent},
  {path: 'permission-detail-form', component: PermissionDetailFormComponent},
  {path: 'rp-detail-form', component: RpDetailFormComponent},
  {path: 'users-detail-form', component: UsersDetailFormComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
