import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
import { TasksComponent } from './pages/tasks/tasks.component';
const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"tasks", component:TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
