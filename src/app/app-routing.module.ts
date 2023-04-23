import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './About/about/about.component';
import { HomeComponent } from './Home/home/home.component';

const routes: Routes = [
  
    {
      path:'', component:HomeComponent
    },
    {
      path:'about', component:AboutComponent
    }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
