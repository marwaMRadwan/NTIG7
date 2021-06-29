import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './play/parent/parent.component';
import { ReactivecompComponent } from './reactivecomp/reactivecomp.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
