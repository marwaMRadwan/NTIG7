import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDataComponent } from './pages/all-data/all-data.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"allData", component:AllDataComponent},
  {path:"edit", component:EditprofileComponent},
  {path:"**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
