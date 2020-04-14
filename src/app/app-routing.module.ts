import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {GitDetailsComponent} from './git-details/git-details.component';
import { LoginComponent} from './login/login.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'homepage', component: HomePageComponent},
  {path:'passwordReset', component: PasswordResetComponent},
  {path:'gitDetails', component: GitDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
