import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { GitService } from '../services/git-service.service';
import { GitUser } from '../objects/gituser';

@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {
  detailForm: FormGroup;
  userDetails : GitUser;
  

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

  this.gitService.getUserDetail(this.detailForm.get('userName').value).subscribe(response =>{
    if(response.status == 200){
      this.userDetails = JSON.parse(JSON.stringify(response.body));
      console.log(this.userDetails);
    }else{
      console.log('Call Failed');
    }
  }
  )
}

}
