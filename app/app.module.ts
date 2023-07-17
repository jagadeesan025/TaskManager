import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';
import { CataComponent } from './cata/cata.component';
import { ClientComponent } from './client/client.component';
import {HttpClientModule} from '@angular/common/http';
import { CldComponent } from './cld/cld.component';
import { EmpdComponent } from './empd/empd.component';
import { CatadComponent } from './catad/catad.component';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmpComponent,
    CataComponent,
    ClientComponent,
    CldComponent,
    EmpdComponent,
    CatadComponent,
    TaskComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
