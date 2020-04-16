import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { LoginComponent } from './login/login.component';
import { ManageUsersService } from './services/manage-users.service'

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
    ReactiveFormsModule
  ],
  providers: [ ManageUsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
