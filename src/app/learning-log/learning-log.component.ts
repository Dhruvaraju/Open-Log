import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-learning-log',
  templateUrl: './learning-log.component.html',
  styleUrls: ['./learning-log.component.css']
})
export class LearningLogComponent implements OnInit {
  url : String;
  finalUrl : SafeResourceUrl;
  

  constructor(private sanitizer : DomSanitizer) { 
    this.finalUrl= this.sanitizer.bypassSecurityTrustUrl("https://github.com/dhruvaraju");
  }

  ngOnInit() {
    
  }

}
