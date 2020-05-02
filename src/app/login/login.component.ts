import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { ManageUsersService } from '../services/manage-users.service';
import { User } from '../objects/user';
import { GitService } from '../services/git-service.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { AddLogIns } from '../actions/log-in.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Declaring a form for log in with defining type as form group
  loginForm : FormGroup;
  registrationForm : FormGroup;
  login : boolean;
  register : boolean;
  userRegistered : boolean;
  pwdControl ;
  userNameAvailable : boolean;
  registrationComplete : boolean;
  onNgInit(){
    
  }
  //Constructor parameters will be available by default to the entire component
  constructor(private formBuilder : FormBuilder, private userService: ManageUsersService, private gitService :GitService,
    private router : Router, private store : Store<State>){
    this.buildForm();
    this.regFormBuild();
    this.login ;
    this.register ;
    this.userNameAvailable;
    this.userRegistered;
  }

  //Creating the form controls
  buildForm(){
    this.loginForm = this.formBuilder.group({
      userName : this.formBuilder.control(null,Validators.required),
      passWord : this.formBuilder.control(null,Validators.required)
    });
    this.login = true;
    this.register = false;
    this.registrationComplete = false;
  }

  //building Registration form
  regFormBuild(){
    this.userNameAvailable = false;
    this.registrationForm = this.formBuilder.group({
      firstName : this.formBuilder.control(null,Validators.required),
      lastName : this.formBuilder.control(null,Validators.required),
      regUserName : this.formBuilder.control(null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      regPassword : this.formBuilder.control(null,[Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)]),
      confirmPassword : this.formBuilder.control(null,Validators.required),
      city : this.formBuilder.control(null,Validators.required),
      state : this.formBuilder.control(null,Validators.required),
      zip : this.formBuilder.control(null,[Validators.required,Validators.pattern(/^\d{6}$/)]),
      gender : this.formBuilder.control(null,Validators.required)
    },{
      validator :  this.checkWithRegPwd('regPassword' , 'confirmPassword')
    });
  }

  //resetting all the basic form to initial values
  resetRegisterForm(){
    this.registrationForm.reset();
  }

  onSubmitLogin(){
    console.log(this.loginForm.value);
    let validUsr = this.userService.checkUserAvailability(this.loginForm.get('userName').value, this.loginForm.get('passWord').value);
    if(validUsr){ 
      this.store.dispatch(new AddLogIns(true, this.loginForm.get('userName').value));
      this.loginForm.reset();
      this.router.navigate(['homepage']);
    }else{
      this.loginForm.reset();
      this.userRegistered = true;
    }
  }

  onRegClick(){
    this.userRegistered = false;
   this.login =  false;
    this.register = true;
  }

  gotoLogin(){
    this.login =  true;
    this.register = false;
    this.registrationComplete = false;
  }

  onRegistrationSubmit(){
    let userDetail = JSON.stringify(this.registrationForm.value);
    this.userService.addUser(this.registrationForm.value);
    this.login =  false;
    this.register = false;
    this.registrationComplete = true;
  }

  userNameVerify(){
   let validationOutput =  this.userService.verifyUser(this.registrationForm.get('regUserName').value);
   this.userNameAvailable = validationOutput;
   if(validationOutput == true){
     this.registrationForm.get('regUserName').setErrors({UserExists: true});
    this.userNameAvailable = true;
   }else{
    this.userNameAvailable = false;
    if(this.registrationForm.get('regUserName').errors && this.registrationForm.get('regUserName').errors.UserExists ){
      this.registrationForm.get('regUserName').setErrors(null);
    }
   }
   
  }

  checkWithRegPwd(pwd , cnfPwd){
    //Defining a form group
    return (formGroup: FormGroup) => {
      //Assigning the controls to the form group
      const control = formGroup.controls[pwd];
      const matchingControl = formGroup.controls[cnfPwd];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        //console.log("Did not Match");
      //Setting Error occurred
          matchingControl.setErrors({ mustMatch: true });
          //console.log(matchingControl.errors);
      } else {
        //console.log("Match");
          matchingControl.setErrors(null);
      }
  }

  }

  }
