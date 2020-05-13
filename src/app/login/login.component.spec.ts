import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser'
import { LoginComponent } from './login.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, ReactiveFormsModule } from '@angular/forms';
import { ManageUsersService } from '../services/manage-users.service';
import { User } from '../objects/user';
import { GitService } from '../services/git-service.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { State, reducers, metaReducers } from '../reducers';
import { AddLogIns } from '../actions/log-in.actions';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { UnAuthorizedComponent } from '../un-authorized/un-authorized.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginGuard } from '../services/login-guard.guard';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let element : DebugElement;
  let html : HTMLElement;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
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
      providers: [ ManageUsersService, GitService , LoginGuard,{
        provide : APP_BASE_HREF, useValue : '/'
      } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
  })); 

  it('Launch log in Screen',()=>{
    fixture.detectChanges();
    element = fixture.debugElement.query(By.css('#signUpButton'));
    html = element.nativeElement;
  });
   
});
