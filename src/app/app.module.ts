import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { LoginComponent } from './login/login.component';
import { ManageUsersService } from './services/manage-users.service';
import { GitService } from './services/git-service.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LearningLogComponent } from './learning-log/learning-log.component';
import { FeedbackSystemComponent } from './feedback-system/feedback-system.component';
import { LoginGuard } from './services/login-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GitDetailsComponent,
    LoginComponent,
    NavBarComponent,
    LearningLogComponent,
    FeedbackSystemComponent,
    NotFoundComponent,
    UnAuthorizedComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [] 

  ],
  providers: [ ManageUsersService, GitService, LoginGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
