import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PasswordResetComponent,
    HomePageComponent,
    GitDetailsComponent,
    LoginComponent
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
  providers: [ ManageUsersService, GitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
