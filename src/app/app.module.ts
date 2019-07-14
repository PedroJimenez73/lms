import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { LandingComponent } from './autenticacion/landing/landing.component';
import { SigninComponent } from './autenticacion/signin/signin.component';
import { NavComponent } from './nav/nav.component';
import { CommonsModule } from './commons/commons.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    SigninComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
