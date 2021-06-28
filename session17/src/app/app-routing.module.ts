import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllrolesComponent } from './providers/allroles/allroles.component';
import { SingleRoleComponent } from './providers/single-role/single-role.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  // {path:'register', component:RegisterComponent},
  {path:'', component:AllrolesComponent},
  {path:"providers/:slug", component:SingleRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
