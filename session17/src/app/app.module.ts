import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { ApiDataComponent } from './components/api-data/api-data.component';
import { RegisterComponent } from './users/register/register.component';
import { AllrolesComponent } from './providers/allroles/allroles.component';
import { SingleRoleComponent } from './providers/single-role/single-role.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiDataComponent,
    RegisterComponent,
    AllrolesComponent,
    SingleRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
