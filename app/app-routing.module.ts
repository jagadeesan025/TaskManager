import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataComponent } from './cata/cata.component';
import { CatadComponent } from './catad/catad.component';
import { CldComponent } from './cld/cld.component';
import { ClientComponent } from './client/client.component';
import { EmpComponent } from './emp/emp.component';
import { EmpdComponent } from './empd/empd.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'emp',component:EmpComponent},
  {path:'client',component:ClientComponent},
  {path:'cat',component:CataComponent},
  {path:'cld',component:CldComponent},
  {path:'empd',component:EmpdComponent},
  {path:'cata',component:CatadComponent},
  {path:'task',component:TaskComponent},
  {path:'nav', component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
