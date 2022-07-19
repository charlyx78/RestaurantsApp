import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomePreparingComponent } from './home-preparing/home-preparing.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first-page',
    pathMatch: 'full'
  },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-preparing', component: HomePreparingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
