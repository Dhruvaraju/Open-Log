import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageUsersService } from '../services/manage-users.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { RemoveLogIns } from '../actions/log-in.actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName : String;
  
  constructor(private router : Router, private logger: ManageUsersService, private store: Store<State>) { 
    logger.log("Current Page :" + router.getCurrentNavigation().finalUrl);
    store.select(state => state).subscribe(details => {
      this.userName = details.logins.loggedInUser;
    })
  }

  ngOnInit(): void {
    
  }

  userLogout(){
    this.store.dispatch(new RemoveLogIns());
    this.router.navigate(['/']);
  }

}
