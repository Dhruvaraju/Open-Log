import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-system',
  templateUrl: './feedback-system.component.html',
  styleUrls: ['./feedback-system.component.css']
})
export class FeedbackSystemComponent implements OnInit {
  feedbackForm : FormGroup;
  selectionList : String [];
  constructor(private formBuilder : FormBuilder) {
    this.selectionList = ['','Extremely','Very','Moderate','Good','Need-Improvement'];
    this.buildFeedbackForm();
   }

  ngOnInit(): void {
  }

  buildFeedbackForm(){
    this.feedbackForm = this.formBuilder.group({
      userName : this.formBuilder.control(null,Validators.required),
      email : this.formBuilder.control(null,Validators.required),
      navigation : this.formBuilder.control(null,Validators.required),
      appeal : this.formBuilder.control(null,Validators.required),
      infoUnderstand : this.formBuilder.control(null,Validators.required),
      liked : this.formBuilder.control(null,Validators.required),
      didNotLike : this.formBuilder.control(null,Validators.required),
      suggestions : this.formBuilder.control(null)
    });
  }

  feedbackSubmitted(){
    //console.log(this.feedbackForm.value);
  }

  gotoFeedback(){
    this.feedbackForm.reset();
  }


}
