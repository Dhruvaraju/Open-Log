import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {GitDetailsComponent} from './git-details/git-details.component';
import { LoginComponent} from './login/login.component';
import { FeedbackSystemComponent } from './feedback-system/feedback-system.component';
import { LearningLogComponent } from './learning-log/learning-log.component';
import { LoginGuard } from './services/login-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'homepage', component: HomePageComponent, canActivate:[LoginGuard]},
  {path:'gitDetails', component: GitDetailsComponent, canActivate:[LoginGuard]},
  {path:'feedback',component:FeedbackSystemComponent, canActivate:[LoginGuard]},
  {path:'learnLog',component:LearningLogComponent, canActivate:[LoginGuard]},
  {path:'noAuth',component:UnAuthorizedComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
