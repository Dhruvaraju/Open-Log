import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { GitService } from '../services/git-service.service';
import { GitUser } from '../objects/gituser';
import {RootObject, Owner, License} from '../objects/repos';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {
  detailForm: FormGroup;
  userDetails : GitUser;
  repo : RootObject[];
  userMsg : String ;
  reposMsg : String ;
  

  constructor(private gitService : GitService, private formBuilder: FormBuilder) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.detailForm = this.formBuilder.group({
      userName : this.formBuilder.control(null,Validators.required)
    });
  }

  userSearch(){
    this.gitService.getUserDetail
    (this.detailForm.get('userName').value).subscribe(response =>{
      this.userMsg = null;
    if(response.status == 200){
      this.userDetails = JSON.parse(JSON.stringify(response.body));
    }
    },
    catchError => {
      if (404 == catchError.status){
        this.userMsg = "User does not exist";
      };
    }
    )
}

fetchRepos(){
  this.gitService.getRepos(this.detailForm.get('userName').value).subscribe(res =>{
    this.reposMsg = null;
    if(res.status == 200){
        this.repo = JSON.parse(JSON.stringify(res.body));
        if(this.repo.length == 0){
          this.reposMsg = "No Repos exist for this user";
        }
    }
  },
  catchError => {
    if (404 == catchError.status){
      this.reposMsg = "No Repos exist for this user";
    };
  })
}

clearDetails(){
  this.userDetails = null;
  this.repo = null;
  this.userMsg = null;
  this.reposMsg = null;
}

}
