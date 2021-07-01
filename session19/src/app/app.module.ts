import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { AllDataComponent } from './pages/all-data/all-data.component';
import { AppRoutingModule } from './app-routing.module';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserInterceptor } from './user.interceptor';
import { UploadimgComponent } from './uploadimg/uploadimg.component';
import { ChatComponent } from './chat/chat/chat.component';
import { ParentComponent } from './inputout/parent/parent.component';
import { ChildComponent } from './inputout/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    EditprofileComponent,
    AllDataComponent,
    Err404Component,
    HomeComponent,
    UploadimgComponent,
    ChatComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
