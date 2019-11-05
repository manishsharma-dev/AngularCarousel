import { AboutComponent } from './Content/About/About.component';
import { HomeComponent } from './Content/Home/Home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",redirectTo:"/Home",pathMatch:'full'
  },
  {
    path:"Home",component:HomeComponent
  },
  {
    path:"About",component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
