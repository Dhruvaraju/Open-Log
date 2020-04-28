import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private store: Store<State>) { 
    store.select(state => state).subscribe(details => {
      console.log('Log in Validation: '+details.logins.logInValidated);
      console.log('Logged in user: '+details.logins.loggedInUser);
    })
  }

  ngOnInit(): void {
  }

}
